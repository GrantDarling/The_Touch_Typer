const drawDisplay = (display) => {
  function hello() {
    return 'works';
  }
  let letterIndex = 0;
  const words = display[0]
    .split(' ')
    .reduce((acc, currentValue) => acc.concat(currentValue, ' '), []);

  words.forEach((word, wordIndex) => {
    let wordContainer = document.createElement('div');

    if (word !== ' ') {
      wordContainer.classList.add('word');
    } else {
      wordContainer.classList.add('word-space');
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

module.exports = drawDisplay;
