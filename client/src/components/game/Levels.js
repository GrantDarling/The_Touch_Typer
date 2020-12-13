import React from 'react';
import PropTypes from 'prop-types';
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
Levels.propTypes = {
  //levels: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  levels: state.levels,
});
export default connect(mapStateToProps)(Levels);
