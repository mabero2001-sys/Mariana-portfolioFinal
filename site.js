const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');
const workMenus = document.querySelectorAll('.work-menu');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

workMenus.forEach(menu => {
  const button = menu.querySelector('button');
  if (!button) return;

  button.setAttribute('aria-expanded', 'false');
  button.addEventListener('click', event => {
    event.stopPropagation();
    const open = menu.classList.toggle('work-open');
    button.setAttribute('aria-expanded', String(open));
  });
});

document.addEventListener('click', () => {
  workMenus.forEach(menu => {
    menu.classList.remove('work-open');
    const button = menu.querySelector('button');
    if (button) button.setAttribute('aria-expanded', 'false');
  });
});
