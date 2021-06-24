var firebaseConfig = {
    apiKey: "AIzaSyDYmhQLuBoZU6bmrNuP-PE_9WURThreZaY",
    authDomain: "let-s--chat-app-e8e51.firebaseapp.com",
    databaseURL: "https://let-s--chat-app-e8e51-default-rtdb.firebaseio.com",
    projectId: "let-s--chat-app-e8e51",
    storageBucket: "let-s--chat-app-e8e51.appspot.com",
    messagingSenderId: "105965726207",
    appId: "1:105965726207:web:be0bb2efabbb46a6829fca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
      name:user_name,
      message:msg,  like:0
      });
      document.getElementById("msg").value="";


}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
