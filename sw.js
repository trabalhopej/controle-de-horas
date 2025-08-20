// Este ficheiro (service worker) permite que o site funcione offline e seja instalável.
self.addEventListener('install', (e) => {
  // Nenhuma ação necessária na instalação por agora.
});

self.addEventListener('fetch', (e) => {
  // A estratégia de cache "network first" tenta obter os dados da rede primeiro,
  // e se falhar (offline), tenta obter da cache.
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
