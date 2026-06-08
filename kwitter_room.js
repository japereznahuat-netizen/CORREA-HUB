//Añade los enlaces de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAPkBYPOc0O-zvgEqSRJSKFqDIj9BM2hVM",
  authDomain: "kwitter-3f3ab.firebaseapp.com",
  databaseURL: "https://kwitter-3f3ab-default-rtdb.firebaseio.com",
  projectId: "kwitter-3f3ab",
  storageBucket: "kwitter-3f3ab.firebasestorage.app",
  messagingSenderId: "721982469436",
  appId: "1:721982469436:web:cb606b56280b8736291a39"
};
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
