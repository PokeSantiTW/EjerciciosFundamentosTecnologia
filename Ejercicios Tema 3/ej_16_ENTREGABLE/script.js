const mouseEventsList = ['mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'click', 'contextmenu', 'dblclick'];

const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');

const parrafo3 = document.getElementById('parrafo3');

const btnReinicioCuadro1 = document.getElementById('botonCuadro1');
const btnReinicioCuadro2 = document.getElementById('botonCuadro2');

var parrafoInterno;

square1.counters = { mouseDown: 0, mouseUp: 0, mouseOver: 0, mouseOut: 0, mouseMove: 0, click: 0, contectmenu: 0, dbClick: 0 };
square2.counters = { mouseDown: 0, mouseUp: 0, mouseOver: 0, mouseOut: 0, mouseMove: 0, click: 0, contectmenu: 0, dbClick: 0 };

mouseEventsList.forEach(eventType => {
  square1.addEventListener(eventType, eventHandler);
  square2.addEventListener(eventType, eventHandler);

  document.addEventListener(eventType, mousePosition);
});

btnReinicioCuadro1.addEventListener("click", restartSquare);
btnReinicioCuadro2.addEventListener("click", restartSquare);

function formatText(counts) {
  return `
    MouseDown: ${counts.mouseDown} |
    MouseUp: ${counts.mouseUp} |
    MouseOver: ${counts.mouseOver} |
    MouseOut: ${counts.mouseOut} |
    MouseMove: ${counts.mouseMove} |
    Click: ${counts.click} |
    ContextMenu: ${counts.contectmenu} |
    DoubleClick: ${counts.dbClick}
  `.trim();
}

function eventHandler(e) {
  const cuadro = e.currentTarget;
  updateCounts(e.type, cuadro.counters);

  parrafoInterno = cuadro.querySelector('p');
  parrafoInterno.innerHTML = formatText(cuadro.counters);

  isResize = cuadro.style.resize;

  // Cambiar colores
  if (isResize == "") {
    if (e.type == 'mouseover') {
      cuadro.style.backgroundColor = "red";
      parrafoInterno.style.backgroundColor = "red";
    } else if (e.type == 'mouseout') {
      cuadro.style.backgroundColor = "lightgray";
      parrafoInterno.style.backgroundColor = "lightgray";
    } else if (e.type == 'click') {
      cuadro.style.backgroundColor = "green";
      parrafoInterno.style.backgroundColor = "green";
    } else if (e.type == 'dblclick') {
      // Se activa el resize
      cuadro.style.backgroundColor = "yellow";
      parrafoInterno.style.backgroundColor = "yellow";

      cuadro.style.resize = "both";
      cuadro.style.overflow = "auto";
    }
  } else {
    if (e.type == 'dblclick') {
      // Se desactiva el resize
      cuadro.style.backgroundColor = "red";
      parrafoInterno.style.backgroundColor = "red";
      
      cuadro.style.resize = "";
    }
  }
}

function updateCounts(type, countsObj) {
  switch (type) {
    case 'mousedown': countsObj.mouseDown++; break;
    case 'mouseup': countsObj.mouseUp++; break;
    case 'mouseover': countsObj.mouseOver++; break;
    case 'mouseout': countsObj.mouseOut++; break;
    case 'mousemove': countsObj.mouseMove++; break;
    case 'click': countsObj.click++; break;
    case 'contextmenu': countsObj.contectmenu++; break;
    case 'dblclick': countsObj.dbClick++; break;
  }
}

function mousePosition(e) {
  parrafo3.innerHTML = 
  "Screen X=" + e.screenX + 
  " Y=" + e.screenY +
  " | Page X=" + e.pageX +
  " Y=" + e.pageY;

  if (e.target.className == "cuadro" || e.target.parentNode.className == "cuadro") {
    let bounding = e.target.getBoundingClientRect();
    let posicionRatonX = e.pageX - bounding.left;
    let posicionRatonY = e.pageY - bounding.top;

    parrafo3.innerHTML += 
    " | Posición del cuadro " +
    bounding.left.toFixed(2) + "," + bounding.top.toFixed(2) + " a " + 
    bounding.right.toFixed(2) + "," + bounding.bottom.toFixed(2) + " | " +
    "Ratón respecto cuadro X=" + posicionRatonX.toFixed(2) + " Y=" + posicionRatonY.toFixed(2);
  }
}

function restartSquare(e) {
  let square = e.target.nextElementSibling;

  square.style.width = "400px";
  square.style.height = "400px";
  square.counters = { 
    mouseDown: 0, 
    mouseUp: 0, 
    mouseOver: 0, 
    mouseOut: 0, 
    mouseMove: 0, 
    click: 0, 
    contectmenu: 0, 
    dbClick: 0 };
  
  let parrafo = square.querySelector("p");
  parrafo.style.backgroundColor = "white";
  parrafo.innerHTML = "Parrafo" + parrafo.id.charAt(parrafo.id.length-1);
}