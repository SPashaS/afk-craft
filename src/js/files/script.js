// Подключение функционала "Чертогов Фрилансера"
// import { log } from 'gulp-util';
// import { lightGalleryCoreSettings } from 'lightgallery/lg-settings.js';
import { isMobile, menuClose, menuOpen, _slideUp, _slideDown, closeAllSubMenus } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
// import { log } from 'gulp-util';

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector(".search__input");
  const searchBlock = document.querySelector(".search__block");

  searchInput.addEventListener("input", function() {
    if (searchInput.value.length >= 2) {
      searchBlock.classList.add("search__block--active");
      searchBlock.style.display = "block";
    } else {
      searchBlock.classList.remove("search__block--active");
      searchBlock.style.display = "none";
    }
  });
});


document.addEventListener("click", function (e) {
  const targetElement = e.target;

  // Проверяем, был ли клик по элементу с классом 'basket-card'
  if (targetElement.closest('.basket-card')) {
    const basketCard = targetElement.closest('.basket-card');
    
    // Добавляем или убираем класс 'basket-card--active' при клике
    basketCard.classList.toggle('basket-card--active');
  }
});

// document.addEventListener("change", function (e) {
//   if (e.target.classList.contains('size__input')) {
//     const isChecked = Array.from(document.querySelectorAll('.size__input')).some(input => input.checked);

//     if (isChecked) {
//       document.body.classList.add('pop-message-active');

//       // Устанавливаем таймер для автоматического скрытия через 3 секунды
//       setTimeout(() => {
//         document.body.classList.remove('pop-message-active');
//       }, 1000);
//     } else {
//       document.body.classList.remove('pop-message-active');
//     }
//   }
// });

// document.addEventListener("change", function (e) {
//   if (e.target.classList.contains('size__input')) {
//     const input = e.target;

//     // Проверяем, отмечен ли input
//     if (input.checked) {
//       // Показать сообщение о добавлении в корзину
//       showMessage('pop-message--add');
//     } else {
//       // Показать сообщение об удалении из корзины
//       showMessage('pop-message--remove');
//     }
//   }
// });

let messageTimeout;

document.addEventListener("change", function (e) {
  if (e.target.classList.contains('size__input')) {
    const input = e.target;

    // Проверяем состояние после изменения
    if (input.checked) {
      // Если input становится отмеченным, показываем сообщение о добавлении
      showMessage('pop-message--add');
    } else {
      // Если input становится неотмеченным, показываем сообщение об удалении
      showMessage('pop-message--remove');
    }
  }
});

function showMessage(type) {
  // Убираем активный класс с любых сообщений и очищаем предыдущий таймер
  document.querySelectorAll('.pop-message').forEach(el => {
    el.classList.remove('pop-message-active');
  });
  clearTimeout(messageTimeout);

  // Показ нужного сообщения
  const message = document.querySelector(`.${type}`);
  if (message) {
    message.classList.add('pop-message-active');

    // Убираем сообщение через 3 секунды и сохраняем таймер
    messageTimeout = setTimeout(() => {
      message.classList.remove('pop-message-active');
    }, 1000);
  }
}

document.querySelectorAll('.favorite-btn').forEach(button => {
  button.addEventListener('click', function() {
    button.classList.toggle('favorite-btn--active'); // Переключаем класс 'active'
  });
});
