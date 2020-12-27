const isDarkMode = () => {
  let darkmode = localStorage.getItem('darkmode');
  let body = document.body;

  if (darkmode === 'true') {
    body.classList.add('theme-dark');
    body.classList.remove('theme-light');

    return null;
  }

  body.classList.remove('theme-dark');
  body.classList.add('theme-light');

  return null;
};

export default isDarkMode;
