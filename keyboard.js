const keys = document.querySelectorAll('.keys')

keys.forEach(key => console.log(key.dataset.name))


// const keyDown = (e) => {
//     if (e.code == key.dataset.name) key.style.fill = "purple";
// }

// const keyUp = (e) => {
//     if (e.code == key.dataset.name) key.style.fill = "#1d1d1d";
// }


// document.addEventListener('keydown', keyDown);
// document.addEventListener('keyup', keyUp);

// for (i = 0; i < keys.length; ++i) {
//     keyDown()
//     keyUp()
//   }