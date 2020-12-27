import React from 'react';
import SunIcon from '../../../styles/Images/sun_icon.svg';
import MoonIcon from '../../../styles/Images/moon_icon.svg';
import DesignSwitchLogic from './logic/DesignSwitchLogic';

const DesignSwitch = () => {
  return (
    <div className='design_switch'>
      <img className='design_switch__icon' src={SunIcon} alt='Sun Icon' />
      <img className='design_switch__icon' src={MoonIcon} alt='Moon Icon' />
      <button
        className='design_switch__button'
        onClick={DesignSwitchLogic}
      ></button>
    </div>
  );
};

export default DesignSwitch;
