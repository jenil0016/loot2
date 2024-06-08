var firebaseConfig = {
    apiKey: "AIzaSyA2Yupbw_dE7d3RQ61yPeyyW0IpQWBhKl8",
    authDomain: "kwitter-72d97.firebaseapp.com",
    databaseURL: "https://kwitter-72d97-default-rtdb.firebaseio.com",
    projectId: "kwitter-72d97",
    storageBucket: "kwitter-72d97.appspot.com",
    messagingSenderId: "16121462321",
    appId: "1:16121462321:web:1a7c08338c1fbc093f1f10"
  };
  
 
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
   

   
    });});}
getData();
