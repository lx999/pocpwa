if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('static/js/sw.js')
    .then(reg => {
      // registration worked
      console.log('[Service Worker] Registration succeeded. Scope is ' + reg.scope);
      subscribeUser(reg);
      if ('Notification' in window) {
        console.log('Notification permission default status:', Notification.permission);
        Notification.requestPermission(function (status) {
          console.log('Notification permission status:', status);
          // displayNotification();
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

const applicationServerPublicKey = `BKsb5IumFOgJMBgk15Ce-oU123T5EuPFo3goBbRhwZarYlUfGC-I7JTKSee2TpmjG3HNZQcwirLYz2Fx9b_eZrU`;

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function subscribeUser(swRegistration) {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(subscription => {
      console.log('User is subscribed');
      console.log(JSON.stringify(subscription));
    })
    .catch(err => {
      console.log('Failed to subscribe the user: ', err);
    });
}