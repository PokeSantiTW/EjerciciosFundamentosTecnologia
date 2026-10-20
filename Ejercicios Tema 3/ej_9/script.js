const mouseEventsList = ['mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'click', 'contextmenu', 'dblclick'];

const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const parrafo3 = document.getElementById('parrafo3');

let x = 400;
let y = 400;

let windowCounters = { mouseDown: 0, mouseUp: 0, mouseOver: 0, mouseOut: 0, mouseMove: 0, click: 0, contectmenu: 0, dbClick: 0 };
let square1Counters = { mouseDown: 0, mouseUp: 0, mouseOver: 0, mouseOut: 0, mouseMove: 0, click: 0, contectmenu: 0, dbClick: 0 };
let square2Counters = { mouseDown: 0, mouseUp: 0, mouseOver: 0, mouseOut: 0, mouseMove: 0, click: 0, contectmenu: 0, dbClick: 0 };

mouseEventsList.forEach(eventType => {
  document.addEventListener(eventType, windowE);
});

mouseEventsList.forEach(eventType => {
  square1.addEventListener(eventType, square1E);
});

mouseEventsList.forEach(eventType => {
  square2.addEventListener(eventType, square2E);
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

function windowE(e) {
  updateCounts(e.type, windowCounters);
  parrafo3.textContent = formatText(windowCounters);
}

function square1E(e) {
  updateCounts(e.type, square1Counters);
  parrafo1.textContent = formatText(square1Counters);
}

function square2E(e) {
  updateCounts(e.type, square2Counters);
  parrafo2.textContent = formatText(square2Counters);
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