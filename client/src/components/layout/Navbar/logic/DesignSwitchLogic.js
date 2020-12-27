const DesignSwitchLogic = () => {
  let darkmode = localStorage.getItem('darkmode');
  let designBtn = document.querySelector('.design_switch__button');

  designBtn.classList.toggle('design_switch__button--dark');

  if (darkmode === 'true') {
    return localStorage.setItem('darkmode', 'false');
  }

  return localStorage.setItem('darkmode', 'true');
};

export default DesignSwitchLogic;
