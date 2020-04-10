import '../scss/main.scss';
const full = document.querySelector('.home');
const menu = document.querySelector('.menu-icon');
const icon = document.querySelector('.fa');

menu.addEventListener('click', () => {
  if (full.classList.contains('menu-active')) {
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
    full.classList.remove('menu-active');
  } else {
    full.classList.add('menu-active');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  }
});
