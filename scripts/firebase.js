// Firebase Config

const firebaseConfig = {
    apiKey: "AIzaSyBluoOT6jdcY3TiIioEPCj67Ot3Bj4YPCo",
    authDomain: "jobshop-stand-app.firebaseapp.com",
    projectId: "jobshop-stand-app",
    storageBucket: "jobshop-stand-app.appspot.com",
    messagingSenderId: "125142518927",
    appId: "1:125142518927:web:7dac2c7cb74a6d3301b4fa",
    measurementId: "G-48VB3QDNKW",
    databaseURL: "https://jobshop-stand-app-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var visitorsRef = firebase.database().ref('visitors/number');
visitorsRef.on('value', (snapshot) => {
    const data = snapshot.val();

    if(data != 0 && data != undefined){
        document.getElementById("visitors").style.display = 'block';
        document.getElementById("visitorCount").innerHTML = data;
    }
    else{
        document.getElementById("visitors").style.display = 'none';
    }
    console.log(data);
});