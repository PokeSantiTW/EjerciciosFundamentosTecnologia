const mouseEventsList = ['mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'click', 'contextmenu', 'dblclick'];

const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');

let x = 400;
let y = 400;

var parrafoInterno;

square1.counters = { mouseDown: 0, mouseUp: 0, mouseOver: 0, mouseOut: 0, mouseMove: 0, click: 0, contectmenu: 0, dbClick: 0 };
square2.counters = { mouseDown: 0, mouseUp: 0, mouseOver: 0, mouseOut: 0, mouseMove: 0, click: 0, contectmenu: 0, dbClick: 0 };

mouseEventsList.forEach(eventType => {
  square1.addEventListener(eventType, eventHandler);
  square2.addEventListener(eventType, eventHandler)
});

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
  parrafoInterno.textContent = formatText(cuadro.counters);
}

function updateCounts(type, countsObj) {
  switch (type) {
    case 'mousedown': countsObj.mouseDown++; break;
    case 'mouseup': countsObj.mouseUp++; break; // Corregido a mouseUp (U mayúscula)
    case 'mouseover': countsObj.mouseOver++; break;
    case 'mouseout': countsObj.mouseOut++; break;
    case 'mousemove': countsObj.mouseMove++; break;
    case 'click': countsObj.click++; break;
    case 'contextmenu': countsObj.contectmenu++; break;
    case 'dblclick': countsObj.dbClick++; break;
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    y += 1;
  }
  else if (e.key === 'ArrowDown') {
    y -= 1;
  }
  else if (e.key === 'ArrowLeft') {
    x -= 1;
  }
  else if (e.key === 'ArrowRight') {
    x += 1;
  }

  x < 0 ? x = 0 : x;
  y < 0 ? y = 0 : y;

  square1.style.height = x + 'px';
  square1.style.width = x + 'px';

  square2.style.height = y + 'px';
  square2.style.width = y + 'px';
});