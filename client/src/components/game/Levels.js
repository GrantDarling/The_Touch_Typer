import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Levels = ({ levels }) => {
  return (
    levels !== null &&
    levels.length > 0 &&
    levels.map((level) => {
      return (
        <Link to={level.path} className={level.unlocked ? '' : 'locked'}>
          <div className='levels' key={level.id}>
            <h1 className='levels__title'>
              Level {level.difficulty} : {level.title}{' '}
            </h1>
            <p className='levels__description'>{level.description}</p>
            {/* Check if locked */}
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
