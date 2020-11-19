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
      wordContainer.innerHTML = '_';
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
    });
  });
};

drawDisplay();

let typeChecker = () => {
  const correct = 'correct';
  const mistake = 'mistake';
  const active = 'active';
  let currentPosition = 1;
  let lastPosition = currentPosition - 1;
  let wordPosition = 1;
  let lastWordPosition = wordPosition - 1;
  let currentLetter = document.getElementById(`letter-${currentPosition}`); // !!! how to make this not display twice?
  let currentWord = document.getElementById(`word-${wordPosition}`);
  let lastLetter = document.getElementById(`letter-${lastPosition}`); // !!!
  let lastWord = document.getElementById(`word-${lastWordPosition}`);

  currentLetter.classList.add(`key-${active}`);

  document.addEventListener('keydown', advanceCursor);

  function advanceCursor(e) {
    currentPosition++;
    lastPosition++;

    let currentLetter = document.getElementById(`letter-${currentPosition}`);
    let lastLetter = document.getElementById(`letter-${lastPosition}`);
    let currentWord = document.getElementById(`word-${wordPosition}`);
    let lastWord = document.getElementById(`word-${lastWordPosition}`);

    // Check if space, light up if so
    if (currentLetter.innerHTML.trim() == '') {
      wordPosition = wordPosition + 2;
      lastWordPosition = wordPosition - 2;
      currentWord.classList.add(`space-${active}`);
    }

    // Light up current key
    currentLetter.classList.add(`key-${active}`);
    lastLetter.classList.remove(`key-${active}`);
    lastWord.classList.remove(`space-${active}`);

    // Check if correct or mistake
    alert(e.charcode);
  }
};

typeChecker();
