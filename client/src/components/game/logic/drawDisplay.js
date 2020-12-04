// Helpers

const convertToWords = (array) => {
  const words = array[0]
    .split(' ')
    .reduce((acc, currentValue) => acc.concat(currentValue, ' '), []);

  return words;
};

const drawWords = (words) => {
  words.forEach((word, index) => {
    let wordWrapper = document.createElement('div');
    wordWrapper.setAttribute('id', `word-${index}`);

    word === ' '
      ? wordWrapper.classList.add('space')
      : wordWrapper.classList.add('word');

    document.getElementById('display').appendChild(wordWrapper);

    // Draw the inner letters of the word
    drawLetters(word, index);
  });
};

const drawLetters = (word, index) => {
  word.split('').forEach((letter) => {
    let letterWrapper = document.createElement('span');

    letterWrapper.classList.add('letter');
    letterWrapper.innerHTML = letter;
    if (letter === ' ') letterWrapper.classList.add('space');

    document.getElementById(`word-${index}`).appendChild(letterWrapper);
  });
};

const drawDisplay = (display, words) => {
  words = convertToWords(display);
  drawWords(words);
};

module.exports = drawDisplay;
