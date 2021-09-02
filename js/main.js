$(function () {

  $('.mobile-btn').on('click', function () {    // нажатие на кнопку меню
    $('.mobile-menu__list').toggleClass('mobile-menu__list--open');
    $('.mobile-btn').toggleClass('mobile-btn--open');
    $('body').toggleClass('lock');
  });

  $(document).on("click", ".mobile-menu__item", function () { // нажатие на пункт мобильного меню
    $(".mobile-menu__item").closest(".mobile-menu__list").removeClass("mobile-menu__list--open"); // закрываем мобильное меню
    $('.mobile-btn').removeClass('mobile-btn--open'); // убираем крестик
    $('body').removeClass('lock'); // убираем фиксацию скролла страницы
  });


  $(function () { // всплывающая подсказка
    $("button").each(function (b) {//элемент (кнопка)
      if (this.title) {
        var c = this.title;
        var x = -30;//расположение по горизонтали(left)
        var y = 30;//расположение по вертикали (top)
        $(this).mouseover(function (d) {
          this.title = "";
          $("body").append('<div class="tooltip">' + c + "</div>");
          $(".tooltip").css({
            left: (d.pageX + x) + "px",
            top: (d.pageY + y) + "px",
            opacity: "1"//полупрозрачность
          }).show(500);//скорость появления подсказки
        }).mouseout(function () {
          this.title = c;
          $(".tooltip").remove();
        }).mousemove(function (d) {
          $(".tooltip").css({
            left: (d.pageX + x) + "px",
            top: (d.pageY + y) + "px"
          });
        });
      }
    });
  });



    $('.popular__list').slick({  // слайдер

    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="popular__btn popular-prev" type="button" title="назад"><img class= "popular__btn-img" src="images/icon/prev.svg" alt="стрелка назад" ></button>',
    nextArrow: '<button class="popular__btn popular-next" type="button" title="вперёд"><img class= "popular__btn-img" src="images/icon/next.svg" alt="стрелка вперёд" ></button>',

    responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
    });


  $("#menu__list, #footer-menu__list").on("click", "a", function (event) {  // плавный скролл
      event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
      let id = $(this).attr('href'),  //забираем идентификатор блока с атрибута href
        top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь
      $('body,html').animate({ scrollTop: top }, 1000); //анимируем переход на расстояние - top за 1500 мс
    });


});
