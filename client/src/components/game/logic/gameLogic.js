// Globals
let game = {
  started: false,
  ended: false,
  advancer: 0,
  startTime: 0,
  attempts: -1,
  successes: 0,
};

// Accuracy Functions
const increaseAttempts = () => game.attempts++;
const increaseSuccesses = () => game.successes++;

const calculateAccuracy = () =>
  Math.floor((game.successes / game.attempts) * 100);

let renderAccuracy = () => {
  let accuracyDisplay = document.querySelector('#accuracy');
  let accuracy = calculateAccuracy();
  isNaN(accuracy)
    ? (accuracyDisplay.innerHTML = `Accuracy: 100%`)
    : (accuracyDisplay.innerHTML = `Accuracy: ${accuracy}%`);
};

// WPM Functions
let getTimeElapsed = () => {
  let currentTime = Date.now() / 60000;
  let timeElapsed = currentTime - game.startTime;
  return timeElapsed.toFixed(2);
};

let calculateWPM = () => {
  let currentTime = getTimeElapsed();
  let totalWords = getCurrentWordPosition() / 2; // Divide to compensate for spaces
  let WPM = (totalWords / currentTime).toFixed(1);

  return WPM;
};

let renderWPM = () => {
  const wpmDisplay = document.querySelector('#wpm');
  let WPM = calculateWPM();
  isNaN(WPM)
    ? (wpmDisplay.innerHTML = 'WPM: 0')
    : (wpmDisplay.innerHTML = `WPM: ${WPM}`);
};

// Render & Advance Cursor
let renderCursor = () => {
  let cursor = document.getElementsByClassName('letter')[game.advancer];
  let lastCursor = document.getElementsByClassName('letter')[game.advancer - 1];

  if (game.started && game.advancer >= 1) {
    cursor.classList.add('cursor');
    lastCursor.classList.remove('cursor');
  }
};

// Advance cursor
let advanceCursor = () => {
  if (game.started) {
    game.advancer++;
    renderCursor();
  }
  return game.advancer;
};

// Check Key Pressed
let checkKey = (e) => {
  let currentKey = document.getElementsByClassName('letter')[game.advancer];

  if (currentKey.innerHTML === e.key) {
    currentKey.classList.add('key--success');
    increaseSuccesses();
    advanceCursor();
  } else if (game.advancer >= 1) {
    currentKey.classList.add('key--fail');
  }
};

// Highlights the word for success or error
let addHighlightClass = () => {
  let lastwordDiv;
  let currentWord = document.getElementsByClassName('letter')[game.advancer]
    .parentNode.id;
  let wordDiv = document.querySelector(`#${currentWord}`);
  wordDiv.classList.add('word--active');

  if (game.advancer >= 1) {
    let lastWord = document.getElementsByClassName('letter')[game.advancer - 1]
      .parentNode.id;
    let lastwordDiv = document.querySelector(`#${lastWord}`);
    lastwordDiv.classList.remove('word--active');
  }

  if (
    wordDiv !== lastwordDiv &&
    wordDiv.children[0].classList.contains('space')
  ) {
    renderWPM();
  }
};

// Get Current Word Index
let getCurrentWordPosition = () => {
  let currentWordPosition = document
    .getElementsByClassName('letter')
    [game.advancer].parentNode.id.split('word-')
    .slice(0)
    .join('');

  return currentWordPosition;
};

// Initialize Game
let startGame = (e) => {
  let startScreen = document.querySelector('#start-screen');

  game.started = true;
  game.startTime = Date.now() / 60000;
  startScreen.style.display = 'none';
  renderCursor();
};

// Check if Games Over
let isGameOver = () => {
  let totalWords = document.querySelectorAll('.word').length;
  let totalSpaces = document.querySelectorAll('.space').length;
  let totalElements = totalWords + totalSpaces;
  let currentPosition = getCurrentWordPosition();

  if (currentPosition >= totalElements - 1) {
    return (game.ended = true); // !!! check if game is over and return this
  }

  return (game.ended = false);
};

// End Game
let endGame = () => {
  alert('game is over!!!');
};

// Play Game
let playGame = (e) => {
  if (!game.started && e.key === ' ') {
    startGame(e);
  }

  if (game.started) {
    increaseAttempts();
    checkKey(e);
    renderAccuracy();
    addHighlightClass();
  }

  isGameOver();

  if (game.ended) {
    endGame();
  }
};

/**
 * TODO:
 * 1. Create an end game function
 * 2. Fix WPM to be more accurate
 */

// const playGame = (e) => {
//   console.log(e.key);
// };

module.exports = playGame;
