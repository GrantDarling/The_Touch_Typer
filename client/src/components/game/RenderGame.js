import React, { useEffect } from 'react';
import { connect } from 'react-reduximport drawDisplay from '../logic/Game/drawDisplay';
import playGame from '../logic/Game/gameLogic';

const RenderGame = ({ name, achievements }) => {
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
      <h1>
        Display: {name} : {achievements ? 'true' : 'false'}
      </h1>
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
  achievements: state.auth.user
    ? state.auth.user.achievements[0].sublevels.easy.bronze
    : '',
});

export default connect(mapStateToProps)(RenderGame);
