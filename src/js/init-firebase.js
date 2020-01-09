// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCk-S-TT-d_pXIgzZHkq_iZ1-8saOJvRUI",
    authDomain: "angularweb-a9208.firebaseapp.com",
    databaseURL: "https://angularweb-a9208.firebaseio.com",
    projectId: "angularweb-a9208",
    storageBucket: "angularweb-a9208.appspot.com",
    messagingSenderId: "144176014424",
    appId: "1:144176014424:web:a92c3e7681f925cf58562d",
    measurementId: "G-RX9H22VMYZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

console.log(database);