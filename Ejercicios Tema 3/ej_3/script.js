var parrafo = document.getElementById("parrafo");
var down = 0;
var up = 0;
var press = 0;

document.addEventListener("keydown", keyEvent);
document.addEventListener("keyup", keyEvent);
document.addEventListener("keypress", keyEvent);

function keyEvent(e) {
  if (e.type == "keydown") {
    down++;
  } else if (e.type == "keyup") {
    up++;
  } else if (e.type == "keypress") {
    press++;
  }

  parrafo.innerHTML = "EVENTOS → Press: " + press + " | Up: " + up + " | Down: " + down;
}