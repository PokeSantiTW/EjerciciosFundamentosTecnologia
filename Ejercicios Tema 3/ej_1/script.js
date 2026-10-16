var parrafo = document.getElementById("parrafo");

document.addEventListener("keydown", function () {
  parrafo.innerHTML = "Evento: keydown";
});
document.addEventListener("keyup", function () {
  parrafo.innerHTML = "Evento: keyup";
});
document.addEventListener("keypress", function () {
  parrafo.innerHTML = "Evento: keypress";
});
