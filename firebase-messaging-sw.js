// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// YOUR REAL CONFIGURATION (No placeholders)
const firebaseConfig = {
    apiKey: "AIzaSyAR7j3DDQQWHIEwv1_-PHQsSHze3kphPk8",
    authDomain: "smartst-os.firebaseapp.com",
    projectId: "smartst-os",
    storageBucket: "smartst-os.firebasestorage.app",
    messagingSenderId: "866980185011",
    appId: "1:866980185011:web:03006fe6a81634d5dec1c6"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // Using your app's icon URL so it looks professional
    icon: 'https://icons.veryicon.com/png/o/miscellaneous/street-network-app/student-13.png',
    badge: 'https://icons.veryicon.com/png/o/miscellaneous/street-network-app/student-13.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Basic fetch handler to satisfy PWA installation criteria
self.addEventListener('fetch', (event) => {
    // We don't need to cache anything specifically for now, 
    // but the presence of a fetch handler is required by some browsers.
    // We just let the request go through to the network.
    event.respondWith(fetch(event.request));
});
