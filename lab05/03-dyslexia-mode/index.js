/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  /* why three === ? */
  /* check if its already in dyslexia mode */
  const isPressed = window.localStorage.getItem('dyslexic') === 'true';
  if (isPressed) {
    document.body.classList.add('dyslexia-mode');
  }

  const toggle = document.getElementById('dyslexia-toggle');
  if (isPressed) {
    toggle.setAttribute('aria-pressed', 'true');
  }
  toggle.addEventListener('click', toggleEventHandler)
};

const toggleEventHandler = (ev) => {
  let press = ev.currentTarget.getAttribute('aria-pressed') === 'true';
  ev.currentTarget.setAttribute('aria-pressed', String(!press));
  document.body.classList.toggle('dyslexia-mode');
  window.localStorage.setItem('dyslexic', String(!press));
};

initPage();