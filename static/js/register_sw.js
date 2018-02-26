if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('static/js/sw.js')
    .then(reg => {
      // registration worked
      console.log('[Service Worker] Registration succeeded. Scope is ' + reg.scope);
      if ('Notification' in window) {
        console.log('Notification permission default status:', Notification.permission);
        Notification.requestPermission(function (status) {
          console.log('Notification permission status:', status);
          displayNotification();
        });
      }
    }).catch(error => {
      // registration failed
      console.log('[Service Worker] Registration failed with ' + error);
    });
}

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(reg => {
      var options = {
        icon: '/pocpwa/static/img/icons/android-chrome-200x200_LFP.png',
        body: '歡迎加入 Angular 社群',
        data: {
          link: 'https://forum.angular.tw/'
        }
      };
      reg.showNotification('Angular User Group Taiwan', options);
      console.log('displayNotification');
    });
  }
}