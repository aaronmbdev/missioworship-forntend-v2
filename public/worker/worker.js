let CACHE_NAME = 'pwa-task-manager';
let urlsToCache = [
    'index.html',
    'offline.html'
];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(() => {
            return fetch(event.request).catch(() => caches.match('offline.html'));
        })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', function(event) {
    var cacheWhitelist = ['pwa-task-manager'];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});