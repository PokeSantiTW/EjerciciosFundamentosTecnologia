var parrafo = document.getElementById("parrafo");

document.addEventListener("keydown", keyEvent);
document.addEventListener("keyup", keyEvent);
document.addEventListener("keypress", keyEvent);

function keyEvent(e) {
  // if (e.type == "keydown") {
  //   down++;
  // } else if (e.type == "keyup") {
  //   up++;
  // } else if (e.type == "keypress") {
  //   press++;
  // }

  parrafo.innerHTML = "Tecla pulsada: " + e.key + " • Código de la tecla: " + e.code 
  + " • Código ASCII de la tecla: " + e.charCode + " • CTRL: " + e.ctrlKey 
  + " • ALT: " + e.altKey + " • SHIFT: " + e.shiftKey;
}