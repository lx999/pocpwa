importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
  apiKey: "AAAAK1R1Ucw:APA91bHUkZMu5vZfljcc4v1CjH5sj2ywVw5kdvF1OjhwqtZvEtktYe0bjW_yi7JBKo2BJZ4LyKqhZmjIWZ5Jw24KLJ9sp3jxvDw6JRTiDG48TG0k_xN3f9mr90fHpt2N0KzsaTCX52Lv",
  authDomain: "lfp-poc.firebaseapp.com",
  databaseURL: "https://lfp-poc.firebaseio.com",
  projectId: "lfp-poc",
  storageBucket: "lfp-poc.appspot.com",
  messagingSenderId: "186100568524"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  var title = payload.data.title ? payload.data.title:'LFP';
  var icon = payload.data.icon ? payload.data.icon:'https://lx999.github.io/pocpwa/static/img/icons/favicon.ico';
  const options = {
    body: payload.data.status,
    icon: icon,
    data: {
      link: 'https://qlf-www.lfp.fr/pwa/index.html#/'
    }
  };
  return self.registration.showNotification(title, options);
})

// self.addEventListener('push', function(event) {
//   console.log('[Service Worker] Push Received.');
//   console.log(event);
//   let title = 'Server Push';
//   let options = {
//     body: 'push TEST',
//     icon: 'https://lx999.github.io/pocpwa/static/img/icons/favicon.ico',
//     data: {
//         link: 'https://lx999.github.io/pocpwa/#/'
//       }
//   };
//   if (event.data) {
//     options = event.data.json();
//     title = options.title;
//   }
//   event.waitUntil(self.registration.showNotification(title, options));
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
});
