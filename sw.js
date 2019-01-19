var CACHE_NAME = 'mine-caches';
var url=['/Mine/'];
self.addEventListener('install',function(event){
    event.waitUntil(caches.open(CACHE_NAME).then(function(cache){return cache.addAll(url);}));
});
self.addEventListener('fetch',function(event){
    event.respondWith(caches.match(event.request).then(function(response){return response?response:fetch(event.request);}));
});
