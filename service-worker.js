const CACHE_NAME = "learnsphere-cache-v1";
const urlsToCache = [
  "/LearnSphere/",
  "/LearnSphere/index.html",
  "/LearnSphere/contact.html",
  "/LearnSphere/course.html",
  "/LearnSphere/price.html",
  "/LearnSphere/review.html",
  "/LearnSphere/teacher.html",
  "/LearnSphere/css/style.css",
  "/LearnSphere/js/script.js",
  "/LearnSphere/images/home-img.svg",
  "/LearnSphere/images/12.png"
];

// Install event
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
