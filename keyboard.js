
const key = document.querySelector('#b__group');
document.addEventListener('keydown', logKey);
document.addEventListener('keyup', logKey2);


function logKey(e) {
  if (e.code == key.dataset.name) {
    
    key.style.fill = "purple";
}
 
}


function logKey2(e) {
  if (e.code == key.dataset.name) {
    
    key.style.fill = " #1d1d1d";
}
  log.textContent += ` ${e.code} + ${key.dataset.name}`; 
}