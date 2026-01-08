const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('#closeMenu');
const mobileMenu = document.querySelector('#mobileMenu');
const overlay = document.querySelector('.mobile-menu__overlay');

// Функция открытия
function openMenu() {
  mobileMenu.classList.add('mobile-menu--open');
  document.body.style.overflow = 'hidden'; // Запрещаем скролл страницы
}

// Функция закрытия
function closeMenu() {
  mobileMenu.classList.remove('mobile-menu--open');
  document.body.style.overflow = ''; // Возвращаем скролл
}

burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Закрытие по кнопке Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});