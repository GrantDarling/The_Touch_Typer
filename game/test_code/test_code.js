const display = [
  'ffj jff j f jfj fj j ff jjj fjfj jjj f ffj jffj jff fj jf jfff jfjf jfj fj j f f jjf ',
];

let counter = 0;
let count2 = 0;

const words = display[0].split(' ');

words.forEach((word, idx) => {
  // Create divs of the words
  var div = document.createElement('div');
  div.classList.add('word');
  div.setAttribute('id', idx);

  document.getElementById('screen').appendChild(div);
  console.log('New iteration!');
  word.split('').forEach((letter) => {
    console.log(letter);
    var innerDiv = document.createElement('div');
    innerDiv.classList.add('letter');
    innerDiv.setAttribute('id', 'id_you_like');
    innerDiv.innerHTML = letter;

    document.getElementById(idx).appendChild(innerDiv);
  });
});

let playGame = () => {
  //console.log(display[0][counter]);
};

document.addEventListener('keydown', logKey);
function logKey(e) {
  counter++;
  playGame();
}

// Split each word into seperate elements in array
// Create a div container for each element in array
// Display all words
// Create class and move it across elements in array

/*
console.log(entry.join(''));

let counter = 0;

const checkValue = () => {
  document.getElementById('screen').innerHTML = entry[counter];
  
  // Split each word into seperate elements in array
  // Create a div container for each element in array 
  // Display all words
  // Create class and move it across elements in array
  
 
};

// How to create closure javascript?
document.addEventListener('keydown', logKey);

function logKey(e) {
  counter++;
  checkValue();
}
*/
