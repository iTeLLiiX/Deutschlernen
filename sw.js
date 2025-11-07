// Service Worker für Deutsch Meistern
// Ermöglicht Offline-Funktionalität und App-Installation

const CACHE_NAME = 'deutsch-meistern-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
];

// Installation
self.addEventListener('install', event => {
  console.log('🚀 Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ Service Worker: Installation failed', error);
      })
  );
});

// Aktivierung
self.addEventListener('activate', event => {
  console.log('🎯 Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker: Activation complete');
      return self.clients.claim();
    })
  );
});

// Fetch - Network First, dann Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone die Response
        const responseToCache = response.clone();
        
        // Cache die neue Response
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });
        
        return response;
      })
      .catch(() => {
        // Wenn Netzwerk fehlschlägt, nutze Cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              console.log('📦 Service Worker: Serving from cache', event.request.url);
              return response;
            }
            // Wenn auch Cache fehlschlägt, zeige Offline-Seite
            return new Response('Offline - Bitte verbinde dich mit dem Internet', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Background Sync (für zukünftige Features)
self.addEventListener('sync', event => {
  console.log('🔄 Service Worker: Background sync triggered');
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});

async function syncProgress() {
  console.log('📊 Service Worker: Syncing progress...');
  // Hier könnte man später Daten mit einem Backend synchronisieren
}

// Push Notifications (für zukünftige Features)
self.addEventListener('push', event => {
  console.log('🔔 Service Worker: Push notification received');
  const options = {
    body: event.data ? event.data.text() : 'Neue Lerneinheit verfügbar!',
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231a4a6e" width="100" height="100"/><text x="50" y="70" font-size="60" text-anchor="middle" fill="white">📚</text></svg>',
    badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle fill="%23f7b267" cx="50" cy="50" r="50"/></svg>',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Deutsch Meistern', options)
  );
});

console.log('✅ Service Worker loaded successfully');

