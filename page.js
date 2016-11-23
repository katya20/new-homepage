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
    getNotesForName1(nameInput.val());
    getNotesForName2(nameInput.val());
    console.log(nameInput.val());
    e.preventDefault();
    $("#output1").html("");
    $("#output2").html("");
    $("#greeting").append(nameInput.val());   
  }	
  
})



// To Do List (today)

var input1 = $("#checkbox1")



input1.keydown(function(e) {	
  if (e.keyCode == "13") {
    addListItem(nameInput.val() + "/1", input1.val()); 
    console.log("input1 keydown is working");
//    $("#output1").append(input1.val());
  }
})

onNewListItem(nameInput.val() + "1", function(value) {
  $("#output1").append("<input type="checkbox" id="checkbox"><label for="checkbox"> value </label>")
//    "<div>" + value + "</div>", "<input type="checkbox">");
  console.log(value);
}) 

$("#clear-button-1").click(function() {
  deleteValue(nameInput.val() + "/1")
  $("#output1").html("");
});


