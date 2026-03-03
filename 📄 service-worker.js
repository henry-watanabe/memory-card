const CACHE_NAME = "memory-game-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./正解.mp3",
  "./不正解.mp3",
  "./アンパンマン.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});