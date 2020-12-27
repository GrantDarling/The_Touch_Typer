import React, { useEffect } from 'react';
import SunIcon from '../../styles/Images/sun_icon.svg';
import MoonIcon from '../../styles/Images/moon_icon.svg';
import toggleTheme from '../logic/Navbar/toggleTheme';
import checkTheme from '../logic/Navbar/checkTheme';

const DesignSwitch = () => {
  useEffect(() => {
    checkTheme();
  }, []);

  return (
    <div className='design_switch'>
      <img className='design_switch__icon' src={MoonIcon} alt='Moon Icon' />
      <img className='design_switch__icon' src={SunIcon} alt='Sun Icon' />
      <button className='design_switch__button' onClick={toggleTheme}></button>
    </div>
  );
};

export default DesignSwitch;
