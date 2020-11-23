const display = [
  'ffj jff j f jfj fj j ff jjj fjfj jjj f ffj jffj jff fj jf jfff jfjf jfj fj j f f jjf ',
];

const drawDisplay = () => {
  let letterIndex = 0;
  const words = display[0]
    .split(' ')
    .reduce((acc, currentValue) => acc.concat(currentValue, ' '), []);

  words.forEach((word, wordIndex) => {
    let wordContainer = document.createElement('div');

    if (word !== ' ') {
      wordContainer.classList.add('word');
    } else {
      wordContainer.classList.add('space');
      wordContainer.innerHTML = '';
    }

    wordContainer.setAttribute('id', `word-${wordIndex}`);
    document.getElementById('display').appendChild(wordContainer);

    word.split('').forEach((letter) => {
      letterIndex++;

      let letterWrapper = document.createElement('span');
      letterWrapper.classList.add('letter');
      letterWrapper.setAttribute('id', `letter-${letterIndex}`);
      letterWrapper.innerHTML = letter;
      document.getElementById(`word-${wordIndex}`).appendChild(letterWrapper);

      if (letter === ' ') {
        letterWrapper.classList.add('space');
      }
    });
  });
};

// 2. Style previous key based off of key input <-- only wrong key
// 3.
// 4. Key accuracy
// 5. Key wpm
// 6. Figure out general for medals
//     if finished, at wpm then bronze, if above x words per minute silver, if above x words per minute over 90% accuracy then gold

drawDisplay();

(function () {
  let advancer = -1;
  let startScreen = document.querySelector('#start-screen');

  // Begin game
  let startGame = (e) => {
    if (e.key === 'Backspace') startScreen.style.display = 'none';
    drawCursor();
  };

  // Draw Cursor
  let drawCursor = () => {
    let lastCursor = document.getElementsByClassName('letter')[advancer - 1];
    let cursor = document.getElementsByClassName('letter')[advancer];

    if (advancer >= 1) lastCursor.classList.remove('cursor');
    cursor.classList.add('cursor');
  };

  // Advance cursor
  let advanceCursor = () => {
    advancer++;
    drawCursor();
  };

  // Event listeners
  document.addEventListener('keydown', advanceCursor);
  document.addEventListener('keydown', startGame);
})();

// TODO:
// 1. Make spacebar visible for cursor
// 2. check if keypress is successful or not
//    3. If it is NOT, wait until it is successful and leave red mark
// 4. Update the draw because we do not need to number them now

// let typeChecker = () => {
//   const correct = 'correct';
//   const mistake = 'mistake';
//   const active = 'active';

//   let currentPosition = 1;
//   let lastPosition = currentPosition - 1;
//   let nextPosition = currentPosition + 1;

//   let wordPosition = 1;
//   let lastWordPosition = wordPosition - 1;

//   let currentLetter = document.getElementById(`letter-${currentPosition}`); // !!! how to make this not display twice?
//   let currentWord = document.getElementById(`word-${wordPosition}`);
//   let lastLetter = document.getElementById(`letter-${lastPosition}`); // !!!
//   let lastWord = document.getElementById(`word-${lastWordPosition}`);

//   currentLetter.classList.add(`key-${active}`);

//   document.addEventListener('keydown', advanceCursor);

//   function advanceCursor(e) {
//     currentPosition++;
//     lastPosition++;
//     nextPosition++;

//     let currentLetter = document.getElementById(`letter-${currentPosition}`);
//     let lastLetter = document.getElementById(`letter-${lastPosition}`);
//     let nextLetter = document.getElementById(`letter-${nextPosition}`);
//     let currentWord = document.getElementById(`word-${wordPosition}`);
//     let lastWord = document.getElementById(`word-${lastWordPosition}`);

//     // Check if backspace

//     // if (e.key === 'Backspace') {
//     //   currentLetter.classList.remove(`key-${active}`);
//     //   lastLetter.classList.add(`key-${active}`);

//     //   currentPosition = currentPosition - 2;
//     //   lastPosition = lastPosition - 2;
//     // }

//     // Check if correct or mistake
//     lastLetter.innerHTML === e.key
//       ? lastLetter.classList.add(`key-${correct}`)
//       : lastLetter.classList.add(`key-${mistake}`);

//     // Check if space, light up if so
//     if (currentLetter.innerHTML.trim() == '') {
//       wordPosition = wordPosition + 2;
//       lastWordPosition = wordPosition - 2;
//       currentWord.classList.add(`space-${active}`);
//     }

//     // Light up current key
//     currentLetter.classList.add(`key-${active}`);
//     lastLetter.classList.remove(`key-${active}`);
//     lastWord.classList.remove(`space-${active}`);
//   }
// };
