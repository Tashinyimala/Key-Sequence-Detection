const pressed    = []
const secretCode = 'tashi';

window.addEventListener('keyup', (event) => {
    pressed.push(event.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        document.body.style.background = "#FFC600";
    }
});