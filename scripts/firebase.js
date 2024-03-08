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

var actualVisitors = 0;

function readFile() {
    fetch('visitors.txt')
        .then(response => response.text())
        .then(data => {

            if (actualVisitors != data && !isNaN(parseInt(data))) {
                document.getElementById('output').innerText = data;
                actualVisitors = data;

                database.ref('visitors').set({
                    number: data
                });
            }
        })
        .catch(error => {
            console.error('Error reading file:', error);
        });
}

readFile();
setInterval(readFile, 500);