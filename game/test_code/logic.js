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

(function () {
  let advancer = 0;
  let startScreen = document.querySelector('#start-screen');
  let started = false;
  let ended = false;
  let initialized = false;
  let totalAttempts = -1;
  let totalSuccesses = 0;
  let milliseconds = 0;

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
  let getCurrentWordIndex = () => {
    // var li = document.getElementById('myId');
    // alert(li.className);
  };

  // calculate words per minute !!!
  let calculateWPM = () => {
    // take current (word - 1) and divide by total minutes
    // getCurrentWordIndex - millisecondsToMinutes
  };

  // display current WPM !!!
  let displayWPM = () => {
    // make inner html the calculated WPM
  };

  // Figure out when the game finishes
  let gameOver = () => {
    // if game is over then gameOver = true;
  };

  // Begin game
  let startGame = (e) => {
    if (e.key === ' ' && initialized === false) {
      initialized = true;
      started = true;
      startScreen.style.display = 'none';
      startTimer(5000);
    }
    drawCursor();
  };

  // End game
  let endGame = () => {};

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
    }
  };

  drawDisplay();
  document.addEventListener('keydown', playGame);
})();
