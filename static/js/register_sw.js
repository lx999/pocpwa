if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('static/js/sw.js')
    .then(function(registration) {
      registration.pushManager.subscribe({userVisibleOnly: true}).then(function(sub) {
        var endpointSections = sub.endpoint.split('/');
        var subscriptionId = endpointSections[endpointSections.length - 1];
        var newKey = firebase.database().ref().child('token').push().key;
        firebase.database().ref('token/' + newKey).set({subscriptionId: subscriptionId});
        console.log('endpoint:', subscriptionId);
      });
    });
  navigator.serviceWorker.ready.then(function(registration) {
     console.log('Service Worker Ready');
  });
}

// web-push generate-vapid-keys pour générer la clé publique et privée
// la publique est pour générer la subscription
// la privée est pour exécuter push
const applicationServerPublicKey = `BKsb5IumFOgJMBgk15Ce-oU123T5EuPFo3goBbRhwZarYlUfGC-I7JTKSee2TpmjG3HNZQcwirLYz2Fx9b_eZrU`;

// changer de format
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

// subscribe à l'aide de pushManager
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