const keys = document.querySelectorAll('.keys')

const findKey = (e, fillColor) => {
    keys.forEach(key => {
        if (e.which == key.dataset.name) {
            key.style.fill = fillColor; 
        }
  });
}
const keyDown = (e) => findKey(e, "red");
const keyUp = (e) => findKey(e, "#1d1d1d");

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
  