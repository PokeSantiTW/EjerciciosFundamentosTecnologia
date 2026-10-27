const output = document.getElementById('parrafo');

document.addEventListener('keyup', function(e) {
    output.innerHTML = `
    Key: ${e.key} | 
    Keycode: ${e.code} | 
    ASCII: ${e.key.charCodeAt(0)} |
    Ctrl: ${e.ctrlKey} |
    Shift: ${e.shiftKey} |
    Alt: ${e.altKey}
    `.trim();;
});