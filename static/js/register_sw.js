if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('static/js/sw.js')
    .then(function(registration) {
      console.log(registration.pushManager.getSubscription())
        registration.pushManager.subscribe({userVisibleOnly: true}).then(function(sub) {
        var endpointSections = sub.endpoint.split('/');
        var subscriptionId = endpointSections[endpointSections.length - 1];
        // var newKey = firebase.database().ref().child('token').push().key;
        // firebase.database().ref('token/' + newKey).set({subscriptionId: subscriptionId});
        firebase.database().ref('token/' + subscriptionId).set({subscriptionId: subscriptionId});
        console.log('endpoint:', subscriptionId);
      });
    });
  navigator.serviceWorker.ready.then(function(registration) {
     console.log('Service Worker Ready');
  });
}
