import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Levels = ({ levels }) => {
  return (
    levels !== null &&
    levels.length > 0 &&
    levels.map((level) => {
      return (
        <Link to={level.difficulty}>
          <div key={level.id}>
            <h1>
              Level {level.difficulty} : {level.title}
            </h1>
          </div>
        </Link>
      );
    })
  );
};

const mapStateToProps = (state) => ({
  levels: state.levels,
});
export default connect(mapStateToProps)(Levels);
