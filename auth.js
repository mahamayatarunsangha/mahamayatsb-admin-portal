// auth.js
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDWDmzkQe-ttGRe5osIf1sYsBByG_MTFjc",
      authDomain: "super-admin-server.firebaseapp.com",
      projectId: "super-admin-server",
      storageBucket: "super-admin-server.firebasestorage.app",
      messagingSenderId: "332309255517",
      appId: "1:332309255517:web:6052578cf95e044bf984b4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // User is not logged in, redirect to login page
        window.location.href = "login.html";
    }
});
