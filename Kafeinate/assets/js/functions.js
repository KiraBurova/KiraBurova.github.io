var upBtn = document.querySelector('.subscribe__up');

//Табы
document.addEventListener('DOMContentLoaded', function(e) {
  // list = элементы a в .tabs__nav
  var list = document.querySelectorAll('.menu__nav a');
  // Превращаем list в array
  list = Array.prototype.slice.call(list, 0);

  // для каждого элемента list
  list.forEach(function(el) {
    // добавить событие click
    el.addEventListener('click', function(e) {
      e.preventDefault();
      //tab = href выбранной a
      var tab = document.querySelector(el.getAttribute('href'));
      // Убираем класс active с a и контента
      document.querySelector('.menu__nav .active')
        .classList.remove('active');
      document.querySelector('.menu__wrap .active')
        .classList.remove('active');

      // задаем класс active a и контенту
      el.classList.add('active');
      tab.classList.add('active');
    });
  });
});

//Слайдер
function slideshowHeader() {
  // list = элементы a в .tabs__nav
  var slider = document.querySelectorAll('.controlls a');
  // Превращаем list в array
  slider = Array.prototype.slice.call(slider, 0);

  // для каждого элемента list
  slider.forEach(function(el) {
    // добавить событие click
    el.addEventListener('click', function(event) {
      event.preventDefault();
      //tab = href выбранной a
      var slide = document.querySelector(el.getAttribute('href'));
      // Убираем класс active с a и контента



      document.querySelector('.controlls .active')
        .classList.remove('active');
      document.querySelector('.slider__content .active')
        .classList.remove('active');

      // задаем класс active a и контенту
      el.classList.add('active');
      slide.classList.add('active');
    });
  });
}
function slideshow(e) {
  var slider = document.querySelectorAll('.feedback__controlls a');
  // Превращаем list в array
  slider = Array.prototype.slice.call(slider, 0);

  // для каждого элемента list
  slider.forEach(function(el) {
    // добавить событие click
    el.addEventListener('click', function(event) {
      event.preventDefault();
      //tab = href выбранной a
      var slide = document.querySelector(el.getAttribute('href'));
      // Убираем класс active с a и контента
      document.querySelector('.feedback__controlls .active')
        .classList.remove('active');
      document.querySelector('.feedback__content .active')
        .classList.remove('active');

      // задаем класс active a и контенту
      el.classList.add('active');
      slide.classList.add('active');
    });
  });
}
//Скролл к верху страницы

function scrollToTop() {
  var timeOut;
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0, -100);
    timeOut=setTimeout('scrollToTop()',10);
  }
  else clearTimeout(timeOut);
}


var blocksArr = [].slice.call(document.querySelectorAll(".favorites__block"));
var btns = [].slice.call(document.querySelectorAll(".favorites__btn"));
function filterByData() {
  for(var i = 0; i < blocksArr.length; i++) {
  if(blocksArr[i].dataset.filter === this.dataset.filter) {
    blocksArr[i].classList.add('active')
  } else {
    blocksArr[i].classList.remove('active');
  }
}
}

document.addEventListener('DOMContentLoaded' , function() {
    btns[0].focus()
})
document.addEventListener('DOMContentLoaded', slideshowHeader);
document.addEventListener('DOMContentLoaded', slideshow);
upBtn.addEventListener('click', scrollToTop);
btns.forEach(function (item) {
        item.addEventListener('click', filterByData);
    });
