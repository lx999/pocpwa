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
  const title = 'Hello World';
  const options = {
    body: payload.data.status
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

// self.addEventListener('notificationclick', event => {
//   const notification = event.notification;
//   const action = event.action;
//   const link = notification.data.link;
//   if (action !== 'close') {
//     if (link) {
//       clients.openWindow(link);
//     }
//   }
//   notification.close();
//   console.log('notificationclick action is', action);
// });

  
// self.addEventListener('push', function(event) {

//   var apiPath = './getPayload?endpoint=';
//   event.waitUntil(registration.pushManager.getSubscription().then(function (subscription){
//       var endpointSections = subscription.endpoint.split('/');
//       var subscriptionId = endpointSections[endpointSections.length - 1];
//       return fetch(apiPath + subscriptionId).then(function(response){
//           if(response.status !== 200){
//               throw new Error();
//           }

//           return response.json().then(function(data){
//             console.log('data:' + data);
//               var title = data.title;
//               var message = data.body;
//               var icon = data.icon;
//               var tag = data.tag;
//               var url = data.url;
//               return self.registration.showNotification(title,{
//                  body: message,
//                  icon: icon,
//                  tag: tag,
//                  data: url
//               });
//           })
//       }).catch(function(err){
//         console.log('fetch error');
//       })

//   }));
//   return;
// });
// function getEndpoint() {
//   return self.registration.pushManager.getSubscription()
//   .then(function(subscription) {
//     if (subscription) {
//       return subscription.endpoint;
//     }

//     throw new Error('User not subscribed');
//   });
// };
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", "key=AAAAK1R1Ucw:APA91bHUkZMu5vZfljcc4v1CjH5sj2ywVw5kdvF1OjhwqtZvEtktYe0bjW_yi7JBKo2BJZ4LyKqhZmjIWZ5Jw24KLJ9sp3jxvDw6JRTiDG48TG0k_xN3f9mr90fHpt2N0KzsaTCX52Lv");
// var myInit = { method: 'GET',
//                headers: myHeaders };
// self.addEventListener('push', function(event) {
//   event.waitUntil(
//     getEndpoint()
//     .then(function(endpoint) {
//       console.log(endpoint);
//       var myRequest = new Request('flowers.jpg', myInit);
//       return fetch(endpoint);
//     })
//     .then(function(response) {
//       return response.text();
//     })
//     .then(function(payload) {
//       console.log(payload);
//       self.registration.showNotification('ServiceWorker Cookbook', {
//         body: payload
//       });
//     })
//   );
// });
// var endp = '';
// navigator.serviceWorker.ready.then(function(reg) {
//   reg.pushManager.getSubscription().then(function(subscription) {
//     endp = subscription.endpoint;
//   })
// });

// self.addEventListener('push', function(event) {  
//   event.waitUntil(  
//     fetch(endp).then(function(response) {  
//       if (response.status !== 200) {   
//         console.log('Looks like there was a problem. Status Code: ' + response.status);  
//         throw new Error();  
//       }

//       // Examine the text in the response  
//       return response.json().then(function(data) {
//         console.log('data' + data);  
//         if (data.error || !data.notification) {  
//           console.error('The API returned an error.', data.error);  
//           throw new Error();  
//         }

//         var title = data.notification.title;  
//         var message = data.notification.message;  
//         var icon = data.notification.icon;  
//         var notificationTag = data.notification.tag;

//         return self.registration.showNotification(title, {  
//           body: message,  
//           icon: icon,  
//           tag: notificationTag  
//         });  
//       });  
//     }).catch(function(err) {  
//       console.error('Unable to retrieve data', err);

//       var title = 'An error occurred';
//       var message = 'We were unable to get the information for this push message';  
//       var icon = URL_TO_DEFAULT_ICON;  
//       var notificationTag = 'notification-error';  
//       return self.registration.showNotification(title, {  
//           body: message,  
//           icon: icon,  
//           tag: notificationTag  
//         });  
//     })  
//   );  
// });

