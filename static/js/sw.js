console.log('Started', self);

function getEndpoint() {
  return self.registration.pushManager.getSubscription()
  .then(function(subscription) {
    if (subscription) {
      return subscription.endpoint;
    }

    throw new Error('User not subscribed');
  });
};

self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});
// self.addEventListener('push', function(event) {
//   console.log(event);
//   var payload = event.data ? event.data.text() : 'no payload';
//   event.waitUntil(
//     self.registration.showNotification('ServiceWorker Cookbook', {
//       body: payload
//     })
//   );
// });
// self.addEventListener('push', function(event) {
//   console.log(event);
//   event.waitUntil(
//     getEndpoint()
//     .then(function(endpoint) {
//       return fetch('./getPayload?endpoint=' + endpoint);
//     })
//     .then(function(response) {
//       return response.text();
//     })
//     .then(function(payload) {
//        self.registration.showNotification('ServiceWorker Cookbook', {
//         body: payload,
//       });
//     })
//   );
// });
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

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(event);
  let title = 'Server Push';
  let options = {
    body: 'push TEST',
    icon: 'https://lx999.github.io/pocpwa/static/img/icons/favicon.ico',
    data: {
        link: 'https://lx999.github.io/pocpwa/#/'
      }
  };
  if (event.data) {
    options = event.data.json();
    title = options.title;
  }
  event.waitUntil(self.registration.showNotification(title, options));
});

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