
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/firebase-messaging-sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}



// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
  var config = {
    apiKey: "AIzaSyA6uiwCxfP8ui70UKEHU1CLp3w_KrQ0SMI",
    authDomain: "fir-32d86.firebaseapp.com",
    databaseURL: "https://fir-32d86.firebaseio.com",
    projectId: "fir-32d86",
    storageBucket: "fir-32d86.appspot.com",
    messagingSenderId: "728581794819"
  };
  firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);

});







