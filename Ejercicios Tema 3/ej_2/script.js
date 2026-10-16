var parrafo = document.getElementById("parrafo");
var down = 0;
var up = 0;
var press = 0;

document.addEventListener("keydown", function () {
  down++;
  updateCount();
});
document.addEventListener("keyup", function () {
  up++;
  updateCount();
});
document.addEventListener("keypress", function () {
  press++;
  updateCount();
});

function updateCount() {
  parrafo.innerHTML = "EVENTOS → Press: " + press + " | Up: " + up + " | Down: " + down;
}