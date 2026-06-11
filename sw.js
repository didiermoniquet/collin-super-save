/* COLLIN · Super Save — service worker
   ---------------------------------------------------------------------------
   Why this exists: an iOS "Add to Home Screen" app has no address bar (no
   pull-to-refresh) and otherwise holds a stale snapshot of the page. This SW
   makes new deploys appear on launch, and makes the game work offline.

   Strategy:
   • HTML / navigations  → NETWORK-FIRST: fetch the latest page when online,
     fall back to the cached page when offline. (This is what makes a new
     version show up on the home-screen app without re-adding the icon.)
   • Everything else (three.js, fonts, icons) → STALE-WHILE-REVALIDATE: serve
     instantly from cache, refresh in the background.

   Maintenance: you do NOT need to touch this on every release — network-first
   HTML + stale-while-revalidate assets keep content fresh on their own. Bump
   CACHE only when you want to force-evict old cached assets (e.g. a new
   three.js version or renamed icons). Keeping it in sync with the game version
   is a convenient habit. */

const CACHE = 'collin-super-save-v1.1.1';

/* Local app shell — same-origin, must cache successfully on install. */
const CORE = [
  './',
  'index.html',
  'collin-super-save.html',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
];

/* Third-party runtime dependency — cached best-effort (install won't fail if
   the CDN is briefly unreachable; it'll be picked up at runtime instead). */
const THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';

self.addEventListener('install', (e) => {
  self.skipWaiting();                                  // take over as soon as possible
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE);
    try { await cache.add(THREE_URL); } catch (_) { /* offline at install — fine */ }
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();                        // control open pages immediately
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;                    // never cache POST/etc.

  const isHTML = req.mode === 'navigate' ||
                 (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    /* NETWORK-FIRST: newest page when online, cached page when offline. */
    e.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE);
        cache.put(req, fresh.clone());                 // keep the offline copy current
        return fresh;
      } catch (_) {
        const cache = await caches.open(CACHE);
        return (await cache.match(req)) ||
               (await cache.match('collin-super-save.html')) ||
               (await cache.match('./')) ||
               Response.error();
      }
    })());
    return;
  }

  /* STALE-WHILE-REVALIDATE for assets (three.js, fonts, images…). */
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req);
    const network = fetch(req).then((res) => {
      // cache normal and opaque (cross-origin no-cors) responses alike
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    }).catch(() => null);
    return cached || (await network) || Response.error();
  })());
});
