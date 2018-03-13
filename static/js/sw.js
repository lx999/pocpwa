// console.log('Started', self);

// self.addEventListener('install', function(event) {
//   self.skipWaiting();
//   console.log('Installed', event);
// });

// self.addEventListener('activate', function(event) {
//   console.log('Activated', event);
// });

// self.addEventListener('push', function(event) {
//   console.log('[Service Worker] Push Received.');
//   console.log(event);
//   console.log(event.data.json());
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
//   console.log(event);
//   var data = {};
//   if (event.data) {
//     data = event.data.json();
//   }
//   var title = data.title || "Something Has Happened";
//   var message = data.message || "Here's something you might want to check out.";
//   var icon = "https://lx999.github.io/pocpwa/static/img/icons/favicon.ico";

//   var notification = new Notification(title, {
//     body: message,
//     tag: 'simple-push-demo-notification',
//     icon: icon
//   });

//   notification.addEventListener('click', function() {
//     if (clients.openWindow) {
//       clients.openWindow('https://lx999.github.io/pocpwa/#/');
//     }
//   });
// });   
self.addEventListener('push', function(event) {

  var apiPath = '<apiPath>';
  event.waitUntil(registration.pushManager.getSubscription().then(function (subscription){

      return fetch(apiPath).then(function(response){
          if(response.status !== 200){
              throw new Error();
          }

          return response.json().then(function(data){
            console.log('data:' + data);
              var title = data.title;
              var message = data.body;
              var icon = data.icon;
              var tag = data.tag;
              var url = data.url;
              return self.registration.showNotification(title,{
                 body: message,
                 icon: icon,
                 tag: tag,
                 data: url
              });
          })
      }).catch(function(err){

      })

  }));
  return;
});
