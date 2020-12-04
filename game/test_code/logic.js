const display = [
  'ffj jff j f jfj fj j ff jjj fjfj jjj f ffj jffj jff fj jf jfff jfjf jfj fj j f f jjf',
];

// Helpers
const splitToWords = (array) => {
  const words = array[0]
    .split(' ')
    .reduce((acc, currentValue) => acc.concat(currentValue, ' '), []);

  return words;
};

const drawWords = () => {
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

const drawDisplay = () => {
  words = splitToWords(display);
  drawWords(words);
};

(function () {
  let advancer = 0;
  let startScreen = document.querySelector('#start-screen');
  let started = false;
  let startTime;
  let ended = false;
  let initialized = false;
  let totalAttempts = -1;
  let totalSuccesses = 0;
  let milliseconds = 0;
  let totalElements;

  // Increase Attempts & Successes
  let increaseAttempts = () => totalAttempts++;
  let increaseSuccesses = () => totalSuccesses++;

  // Calculate Accuracy
  let calculateAccuracy = () => {
    let accuracy = Math.floor((totalSuccesses / totalAttempts) * 100);
    return accuracy;
  };

  // Display Accuracy
  let accuracyDisplayer = () => {
    const accuracyDisplay = document.querySelector('#accuracy');
    let accuracy = calculateAccuracy();
    isNaN(accuracy)
      ? (accuracyDisplay.innerHTML = 'Accuracy: 100%')
      : (accuracyDisplay.innerHTML = accuracy + '%');
  };

  // Convert milliseconds to minutes
  let millisecondsToMinutes = (milliseconds) => {
    let minutes = (milliseconds / 60000).toFixed(2);
    console.log(minutes);
  };

  // Start Timer
  let startTimer = (timeout) =>
    setInterval(() => {
      milliseconds = milliseconds + timeout;
      millisecondsToMinutes(milliseconds);
    }, timeout);

  // Check current word !!!
  let selectActiveWord = () => {
    let lastWordSelector;
    if (advancer >= 1) {
      let lastWord =
        '#' +
        document.getElementsByClassName('letter')[advancer - 1].parentNode.id;
      lastWordSelector = document.querySelector(lastWord);
      lastWordSelector.classList.remove('word--active');
    }
    let currentWord =
      '#' + document.getElementsByClassName('letter')[advancer].parentNode.id;
    let wordSelector = document.querySelector(currentWord);
    wordSelector.classList.add('word--active');
    // !!! Move this
    console.log(wordSelector.children[0].classList.contains('space'));
    if (
      wordSelector !== lastWordSelector &&
      wordSelector.children[0].classList.contains('space')
    ) {
      displayWPM();
    }

    // var li = document.getElementById('myId');
    // alert(li.className);
  };

  // Grab current time
  let getTimeElapsed = () => {
    let currentTime = Date.now() / 60000;
    let timeElapsed = currentTime - startTime;
    console.log(timeElapsed.toFixed(2));
    return timeElapsed.toFixed(2);
  };

  let getCurrentWordPosition = () => {
    let currentWord = document.getElementsByClassName('letter')[advancer]
      .parentNode.id;
    let currentPosition = currentWord.split('word-').slice(0).join('');
    console.log(currentPosition);
    return currentPosition;
  };

  // calculate words per minute !!!
  let calculateWPM = () => {
    let currentTime = getTimeElapsed();
    let totalWords = getCurrentWordPosition() / 2; // Divide to compensate for spaces

    let WPM = (totalWords / currentTime).toFixed(1);
    console.log('WPM: ' + WPM);
    return WPM;
  };

  // display current WPM !!!
  let displayWPM = () => {
    const wpmDisplay = document.querySelector('#wpm');
    let WPM = calculateWPM();
    isNaN(WPM)
      ? (wpmDisplay.innerHTML = 'WPM: 0')
      : (wpmDisplay.innerHTML = 'WPM: ' + WPM);
  };

  // Begin game
  let startGame = (e) => {
    if (e.key === ' ' && initialized === false) {
      let totalWords = document.querySelectorAll('.word').length;
      let totalSpaces = document.querySelectorAll('.space').length;
      let totalElements = totalWords + totalSpaces;
      initialized = true;
      started = true;
      startScreen.style.display = 'none';
      startTime = Date.now() / 60000;
      console.log(
        'total elements to countdown (startGame Func)' + totalElements
      );
      return totalElements;
      //startTimer(5000);
    }
    drawCursor();
  };

  // End game
  let endGame = () => {
    alert('game is over!!!');
  };

  // Draw Cursor
  let drawCursor = () => {
    let lastCursor = document.getElementsByClassName('letter')[advancer - 1];
    let cursor = document.getElementsByClassName('letter')[advancer];

    if (advancer >= 1 && started) lastCursor.classList.remove('cursor');
    cursor.classList.add('cursor');
  };

  // Advance cursor
  let advanceCursor = () => {
    if (started) {
      advancer++;
      drawCursor();

      return advancer;
    }
  };

  // Check if correct
  let checkKey = (e) => {
    let currentKey = document.getElementsByClassName('letter')[advancer];

    if (currentKey.innerHTML === e.key) {
      currentKey.classList.add('key--success');
      increaseSuccesses();
      advanceCursor();
    } else if (advancer >= 1) {
      currentKey.classList.add('key--fail');
    }
  };

  // Play Game
  let playGame = (e) => {
    startGame(e);

    if (started) {
      increaseAttempts();
      checkKey(e);
      accuracyDisplayer();
      selectActiveWord();
    }

    let currentPosition = getCurrentWordPosition();
    let totalWords = document.querySelectorAll('.word').length;
    let totalSpaces = document.querySelectorAll('.space').length;
    let totalElements = totalWords + totalSpaces;

    console.log('POS: ' + currentPosition + 'TOTAL: ' + (totalElements - 2));
    if (currentPosition >= totalElements - 1) {
      endGame();
    }
  };

  drawDisplay();
  document.addEventListener('keydown', playGame);
})();
