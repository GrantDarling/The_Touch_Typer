import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import drawDisplay from '../logic/Game/drawDisplay';
import playGame from '../logic/Game/gameLogic';

const RenderGame = ({ name, achievements }) => {
  useEffect(() => {
    const display = ['ffj jff j f jfj fj j ff jjj fjfj jjj f ffj'];

    drawDisplay(display);

    document.addEventListener('keydown', playGame);

    return function cleanup() {
      document.removeEventListener('keydown', playGame);
      localStorage.setItem('gameStarted', 'false');
    };
  }, []);

  return (
    <div className='game' id='game'>
      <div className='game__accuracy' id='accuracy'>
        Accuracy: 100%
      </div>
      <div className='game__wpm' id='wpm'>
        WPM: 0
      </div>
      <div className='game__display' id='display'>
        <div id='start-screen'>Press space to begin</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.auth.user ? state.auth.user.name : '',
  achievements: state.auth.user
    ? state.auth.user.achievements[0].sublevels.easy.bronze
    : '',
});

export default connect(mapStateToProps)(RenderGame);
