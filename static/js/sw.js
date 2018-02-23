const cacheVersion = 'v1';
const filesToCache = [
  'favicon.ico',
  'index.html',
  'vendor.bundle.js',
  'static/img/clubs/amiens.png',
  'static/img/clubs/angers.png',
  'static/img/clubs/bordeaux.png',
  'static/img/clubs/hac.png',
  'static/img/clubs/lens.png',
  'static/img/clubs/lorient.png',
  'static/img/clubs/losc.png',
  'static/img/clubs/metz.png',
  'static/img/clubs/nantes.png',
  'static/img/clubs/ol.png',
  'static/img/clubs/psg.png',
  'static/img/clubs/rcs.png',
  'static/img/clubs/tfc.png',
  'static/img/clubs/vafc.png',
];
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheVersion)
    .then(cache => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
});
self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] fetch', event.request);
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  );
});