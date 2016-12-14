var firebaseConfig = {
  apiKey: " AIzaSyD-U1vfBg6sjZdxjgzgNzB97dfFvNrcX38",
  authDomain: "nueva-project-1.firebaseapp.com",
  databaseURL: "https://nueva-project-1.firebaseio.com"	
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref("challenge-2")



function popUp() {
  var person = prompt("Please enter your name to save your data :)", "Harry Potter");
  console.log("what?", person)
  return person
}


function newName(nameInput) {
  console.log("persons",nameInput)
  person = nameInput
  getNotesForName1(nameInput);
  getNotesForName2(nameInput);
  console.log(nameInput);
  $("#output1").html("");
  $("#output2").html("");
  $("#greeting").append("Hello, " + nameInput);
  $("#nameInput").css({display: "none"});
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
//    console.log(data.key)
    callback(data.val(), data.key)
  })
}
//name+ "/1/" + id +"/"
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
  onNewListItem(name + "/1", function(note, id) {
    var el = $("<div>" + note + "</div>")
    $(".output1").append(el)
    el.click(function() {
      el.remove()  
      deleteValue(id + "/1")
      //delet note.id from firebase
    })
  })
}


function getNotesForName2(name) {  
  console.log("getNotesForName2")
  onNewListItem(name + "/2", function(note) {
    $(".output2").append("<div>" + note + "</div>")
  })
}




