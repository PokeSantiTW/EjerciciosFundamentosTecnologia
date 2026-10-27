const output = document.getElementById('parrafo');

let word = [];

document.addEventListener('keydown', function(e) {
    if (e.key === 'Backspace' && word.length > 0) {
        word.pop();
    }
    else if (e.key != 'Backspace' && e.key.length <= 1) {
        character = e.key
        word.push(character);
    }
    output.innerHTML = word.join('');
});