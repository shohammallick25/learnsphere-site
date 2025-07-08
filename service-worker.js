const CACHE_NAME = 'learnsphere-v1';
const URLS_TO_CACHE = [
  '/home.html',
  '/course.html',
  '/teacher.html',
  '/price.html',
  '/review.html',
  '/contact.html',
  '/css/style.css',
  '/js/script.js',
  '/images/home-img.svg',
  '/images/12.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
