const CACHE_NAME = 'mcalc-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './m192x192.png',
  './m512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});