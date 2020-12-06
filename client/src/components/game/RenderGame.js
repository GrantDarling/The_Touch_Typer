import React, { useEffect, useReducer, isAuthenticated } from 'react';
import { connect } from 'react-redux';
import drawDisplay from './logic/drawDisplay';
import playGame from './logic/gameLogic';

const RenderGame = ({ name }) => {
  useEffect(() => {
    const display = [
      'ffj jff j f jfj fj j ff jjj fjfj jjj f ffj jffj jff fj jf jfff jfjf jfj fj j f f jjf',
    ];
    drawDisplay(display);
    document.addEventListener('keydown', playGame);

    return function cleanup() {
      document.removeEventListener('keydown', playGame);
    };
  }, []);

  return (
    <div id='game'>
      <h1>Display: {name}</h1>
      <div id='accuracy'>Accuracy: 100%</div>
      <div id='wpm'>WPM: 0</div>
      <div id='display'>
        <div id='start-screen'>Press space to begin</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.auth.user ? state.auth.user.name : '',
});

export default connect(mapStateToProps)(RenderGame);
