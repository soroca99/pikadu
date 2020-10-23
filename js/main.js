// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// Отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function name(even) {
// Отменяем стандартное поведение ссылки
  event.preventDefault();
// Назначаем класс на меню, когда кликаем по кнопке меню
  menu.classList.toggle('visible');
})