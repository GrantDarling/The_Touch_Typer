import React from 'react';
import { connect } from 'react-redux';

const Levels = ({ levels }) => {
  return (
    levels !== null &&
    levels.length > 0 &&
    levels.map((level) => {
      return (
        <div key={level.id}>
          <h1>
            Level {level.difficulty} : {level.title}
          </h1>
        </div>
      );
    })
  );
};

const mapStateToProps = (state) => ({
  levels: state.levels,
});
export default connect(mapStateToProps)(Levels);
