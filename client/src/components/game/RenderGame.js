import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import drawDisplay from './logic/drawDisplay';

const RenderGame = () => {
  useEffect(() => {
    const display = [
      'ffj jff j f jfj fj j ff jjj fjfj jjj f ffj jffj jff fj jf jfff jfjf jfj fj j f f jjf',
    ];

    drawDisplay(display);
  });

  return (
    <div id='game'>
      <div id='accuracy'>Accuracy: 100%</div>
      <div id='wpm'>WPM: 0</div>
      <div id='display'>
        <div id='start-screen'>Press space to begin</div>
      </div>
    </div>
  );
};

export default RenderGame;
