var firebaseConfig = {
  apiKey: " AIzaSyD-U1vfBg6sjZdxjgzgNzB97dfFvNrcX38",
  authDomain: "project-1.firebaseapp.com",
  databaseURL: "https://project-1.firebaseio.com"	
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref("challenge-2")



function popUp() {
  var person = prompt("Please enter your name to save your data :)", "Harry Potter");
  if (person != null) {
    newName();
  }
}


function newName () {
  getNotesForName1(nameInput.val());
  getNotesForName2(nameInput.val());
  console.log(nameInput.val());
  e.preventDefault();
  $("#output1").html("");
  $("#output2").html("");
  $("#greeting").append(nameInput.val());   
}


function storeValue(name, value) {	
  var obj = {}
  obj[name] = value;
  store.child("vars").update(obj)
}

function addListItem(name, value) {		
  store.child("vars" + "/" + name).push(value)
}

function onNewListItem(name, callback) {		
  store.child("vars" + "/" + name).on("child_added", function(data) {
    callback(data.val())
  })
}

function deleteValue(name) {	
  store.child("vars" + "/" + name).remove()
}

function onNewValue(name, callback) {	
  store.child("vars").child(name).on("value", function(data) {		
    callback(data.val());
  })
}

function getNotesForName1(name) {  
  console.log("getNotesForName1")
  onNewListItem(nameInput.val() + "/1", function(note) {
    $(".output1").append("<div>" + note + "</div>")
  })
}

function getNotesForName2(name) {  
  console.log("getNotesForName2")
  onNewListItem(nameInput.val() + "/2", function(note) {
    $(".output2").append("<div>" + note + "</div>")
  })
}




