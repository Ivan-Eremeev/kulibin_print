// Fancybox
function fancybox(fancy) {
  if (fancy.length) {
    fancy.fancybox({
      // selector : '.element', // Инициализация для динамически добавляемых элементов
      toolbar  : true, // Кнопки "закрыть" и "зум"
      smallBtn : false, // Маленькая кнопка "закрыть"
      loop: false, // Зацикленный просмотр
      protect: false, // Отключить щелчок правой кнопкой мыши
      buttons: [ // Кнопки в верхней панели
        // "zoom",
        // "slideShow",
        // "fullScreen",
        // "download",
        // "thumbs",
        "close"
      ],
    })
  }
}
// fancybox($('.gallery__item'));

// Создание галереи программно и открытие при клике по элементу
// function fancyboxProgramm(fancy) {
//   fancy.on('click', function() {
//     if (fancy.length) {
//       $.fancybox.open( $('.fancy'), {
//         loop: false,
//         toolbar  : true,
//         buttons: [ // Кнопки в верхней панели
//           "zoom",
//           // "slideShow",
//           // "fullScreen",
//           // "download",
//           // "thumbs",
//           "close"
//         ],
//       })
//     }
//   });
// }
// fancyboxProgramm();