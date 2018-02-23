if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./static/js/sw.js')
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
    navigator.serviceWorker.getRegistration().then(function(registration) {
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });
    });
  }
}
