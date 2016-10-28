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
    getNotesForName(nameInput.val());
    console.log(nameInput.val());
    $("#output1").html("");
    $("#output2").html("");
  }	
})

