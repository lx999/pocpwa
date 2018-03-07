console.log('Started', self);

self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});
self.addEventListener('push', event => {
  console.log('[Service Worker] Push Received.');
  console.log(event);
  let title = 'Server Push';
  let options = {
    body: 'push TEST',
    icon: 'static/img/icons/faviconLFP.ico',
    data: {
        link: 'https://www.google.fr/'
      }
  };
  if (event.data) {
    options = event.data.json();
    title = options.title;
  }
  event.waitUntil(self.registration.showNotification(title, options));
});
// self.addEventListener('push', function(event) {
//   console.log('Push message', event);

//   var title = 'Le push de test :)';

//   event.waitUntil(
//     self.registration.showNotification(title, {
//      body: 'Bravo tu l\'as reçu',
//      icon: 'static/img/icons/faviconLFP.ico',
//      tag: 'my-tag'
//    }));
// });

self.addEventListener('notificationclick', event => {
  const notification = event.notification;
  const action = event.action;
  const link = notification.data.link;
  if (action !== 'close') {
    if (link) {
      clients.openWindow(link);
    }
  }
  notification.close();
  console.log('notificationclick action is', action);
}) 