// Initialize Firebase
var config = {
    apiKey: "AIzaSyBED1ux2ddGPVjr2Iv9EXTDOwYTQ5top2U",
    authDomain: "first-webapp-b38b5.firebaseapp.com",
    databaseURL: "https://first-webapp-b38b5.firebaseio.com",
    projectId: "first-webapp-b38b5",
    storageBucket: "first-webapp-b38b5.appspot.com",
    messagingSenderId: "648537573924"
    };
firebase.initializeApp(config);

//var testData = {"name": "Jimmy", "age": '22'};

da["database"] = firebase.database();

//data.ref('users/1').set(testData);