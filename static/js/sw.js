// console.log('Started', self);

// self.addEventListener('install', function(event) {
//   self.skipWaiting();
//   console.log('Installed', event);
// });

// self.addEventListener('activate', function(event) {
//   console.log('Activated', event);
// });
export default {
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
}
