const output = document.getElementById('parrafo');

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

    if (x < 0) {
        x = 0;
    }

    if (y < 0) {
        y = 0;
    }

    output.textContent = `X: ${x} | Y: ${y}`;
});