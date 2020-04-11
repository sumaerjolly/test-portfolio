import '../scss/main.scss';
const page = document.querySelector('body');
const menu = document.querySelector('.menu-icon');
const icon = document.querySelector('.fa');

menu.addEventListener('click', () => {
  if (page.classList.contains('menu-active')) {
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
    page.classList.remove('menu-active');
  } else {
    page.classList.add('menu-active');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  }
});
