const mouseEventsList = ['mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'click', 'contextmenu', 'dblclick'];

const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const parrafo3 = document.getElementById('parrafo3');

let x = 400;
let y = 400;

let mouseDown = 0;
let mouseUp = 0;
let mouseOver = 0;
let mouseOut = 0;
let mouseMove = 0;
let click = 0;
let contectmenu = 0;
let dbClick = 0;

mouseEventsList.forEach(eventType => {
    document.addEventListener(eventType, keyEvent);
});

document.addEventListener('keydown', function(e) {
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

    parrafo1.textContent = `Tamaño: ${x}`;
    parrafo2.textContent = `Tamaño: ${y}`;
});

function keyEvent(e) {
  switch (e.type) {
    case 'mousedown':
      mouseDown++;
      break;
    case 'mouseup':
      mouseUp++;
      break;
    case 'mouseover':
      mouseOver++;
      break;
    case 'mouseout':
      mouseOut++;
      break;
    case 'mousemove':
      mouseMove++;
      break;
    case 'click':
      click++;
      break;
    case 'contextmenu':
      contectmenu++;
      break;
    case 'dblclick':
      dbClick++;
      break;
    }

    parrafo3.textContent = `
    MouseDown: ${mouseDown} |
    MouseUp: ${mouseUp} |
    MouseOver: ${mouseOver} |
    MouseOut: ${mouseOut} |
    MouseMove: ${mouseMove} |
    Click: ${click} |
    ContextMenu: ${contectmenu} |
    DoubleClick: ${dbClick}
    `.trim();
}