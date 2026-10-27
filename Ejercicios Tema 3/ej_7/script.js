const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const parrafo3 = document.getElementById('parrafo3');

let x = 400;
let y = 400;

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

    parrafo1.innerHTML = `Tamaño: ${x}`;
    parrafo2.innerHTML = `Tamaño: ${y}`;

    parrafo3.innerHTML = `Cuadrado Izquierdo: ${x} | Cuadrado Derecho: ${y}`;
});