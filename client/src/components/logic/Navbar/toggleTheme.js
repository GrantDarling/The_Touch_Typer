const toggleTheme = () => {
  let darkmode = localStorage.getItem('darkmode');
  let body = document.body;

  if (darkmode === 'true') {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');

    return localStorage.setItem('darkmode', 'false');
  }

  body.classList.add('theme-dark');
  body.classList.remove('theme-light');

  return localStorage.setItem('darkmode', 'true');
};

export default toggleTheme;
