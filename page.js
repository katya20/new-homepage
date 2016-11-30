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
    newName(e);
  }	 
})



// To Do List (today)

var input1 = $("#checkbox1")



input1.keydown(function(e) {	
  popUp();
  if (e.keyCode == "13") {
    if (nameInput.val().length==0) {
      console.log("no name")

    }
    addListItem(nameInput.val() + "/1", input1.val()); 
    console.log("input1 keydown is working");
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


