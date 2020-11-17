const display = [
  'ffj jff j f jfj fj j ff jjj fjfj jjj f ffj jffj jff fj jf jfff jfjf jfj fj j f f jjf ',
];

const drawDisplay = () => {
  let letterIndex = 0;
  const words = display[0]
    .split(' ')
    .reduce((acc, currentValue) => acc.concat(currentValue, ' '), [' ']);

  words.forEach((word, wordIndex) => {
    let wordContainer = document.createElement('div');

    word !== ' '
      ? wordContainer.classList.add('word')
      : wordContainer.classList.add('space');

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
    //}
  });
};

let cursorPosition = 0;

document.addEventListener('keydown', logKey);
function logKey(e) {
  // DESIGN
  // 1. Startcurson bottom-border at cursorPosition 1
  // 2. if key pressed matches target key, make underline green,
  // 3. else, make it red.
  // 4. Once reaches end of word, check if any mistakes
  // 5. If there is, do something negative to the word (css)
  // 6. else, do something positive (css)
  // FUNCTIONALITY
  // A: ACCURACY TRACKER
  // 1. If backspace pressed, return to the last iteration
  // 2. If error made, mark error
  // 3. If keys match, mark as correct
  // 4. Do calculation for accuracy percentage
  // B: TIMER
  // 1. Figure out how I am going to track best times
  // 2. Give medals for each timeframe
  // 3. Do it based off of how many letters there are
  // TEST CODE
  cursorPosition++;
  console.log(cursorPosition);
  document.getElementById(`letter-${cursorPosition}`).classList.add('mystyle');
}

drawDisplay();
