// Clock & time refresh

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  $('#clock').html(h + ":" + m);
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

// Name

var nameInput = $("#nameInput");

nameInput.keydown(function(e) {
  if (e.which == 13) {
    newName(nameInput.val());
    e.preventDefault();
  }	 
})



// To Do List (today)

var input1 = $("#checkbox1")



input1.keydown(function(e) {
  if (e.keyCode == "13") {
    if (nnam) {
      var newPerson = popUp();
      
      if (newPerson != null) {   
        newName(person);  
        console.log("personsss", person)
        addListItem(person + "/1", input1.val()); 
      }            
    } else {
      addListItem(person + "/1", input1.val()); 
    }
//    $("#output1").append(input1.val());
  }
})


$("#clear-button-1").click(function() {
  deleteValue(nameInput.val() + "/1")
  $(".output1").html("");
});

$(".output1").click(function() {
  console.log("output1 clicked");
});


