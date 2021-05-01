'use strict';


jQuery(document).ready(function () {
  $(".page-header__nav-toggle").click(function (e) {
    $(".page-header").toggleClass('page-header--open');
  });

  $(".questions__item").bind('click', function (e) {
    $(".questions__item").removeClass('questions__item--open');
    $(this).addClass('questions__item--open');
  });

  $(".page-header__nav-list a").click(function (e) {
    $(".page-header").toggleClass('page-header--open');
  });

  $(document).click(function (e) {
    var div = $(".page-header__nav");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $(".page-header").removeClass('page-header--open');
    }
  });

  $('#owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    center: true,
    autoWidth: true,
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 2,
        margin: 20
      },
      768: {
        items: 2,
        margin: 30
      },
      1290: {
        items: 6,
        margin: 30
      }
    }
  });

  $('#owl-carousel2').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    center: true,
    autoWidth: true,
    nav: false,
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 3,
        margin: 20
      },
      768: {
        items: 2,
        margin: 30
      },
      1290: {
        items: 3,
        margin: 30
      }
    }
  });

  $(function () {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(_href).offset().top + "px"
      });
      return false;
    });
  });

  var $moneycount = function(){
    var $slider1 = $("#slider-bar").attr('data-1');
    var $slider2 = $("#slider-bar2").attr('data-2');
    var $slider3 = $("#slider-bar3").attr('data-3');
    var $money = $("#money");
    var $english = 0;
    var $days = 0;

    if ($slider2 == 2) {
      $english = 1.75;
    } else if ($slider2 == 1) {
      $english = 1.5;
    } else {
      $english = 1;
    };
    console.log(555, $english);

    if ($slider3 == 3) {
      $days = 1.5;
    } else if ($slider3 == 2) {
      $days = 1.25;
    } else if ($slider3 == 1) {
      $days = 1.1;
    } else {
      $days = 1;
    };
    console.log(666, $days);

    var $sum = ($slider1+4)*45 * $english * $days;

    $money.text(Math.round($sum) + " $");
  };

  (function () {
    $("#slider").slider({
      value: 1,
      min: 0,
      max: 4,
      step: 1,
      create: function (event, ui) {
        $("#slider-bar").width($("#slider").slider("value") * 25 + "%");
        $("#slider-bar").attr('data-1', $("#slider").slider("value"));
        $moneycount();
      },
      slide: function (event, ui) {
        $("#slider-bar").width(ui.value * 25 + "%");
        $("#slider-bar").attr('data-1', ui.value);
        $moneycount();
      }
    });
  })();

  var $slider2text = $("#language");
  var $slider3text = $("#days");

  var $slider2changetext = function (num) {
    switch (num) {
      case 0:
        $slider2text.text('школьный английский');
        break;
      case 1:
        $slider2text.text('английский со словарем');
        break;
      case 2:
        $slider2text.text('свободно разговариваю');
        break;
    }
  };

  var $slider3changetext = function (num) {
    switch (num) {
      case 0:
        $slider3text.text('без опыта');
        break;
      case 1:
        $slider3text.text('около месяца');
        break;
      case 2:
        $slider3text.text('3-6 месяцев');
        break;
      case 3:
        $slider3text.text('6 и больше месяцев');
        break;
    }
  };

  (function () {
    $("#slider2").slider({
      value: 1,
      min: 0,
      max: 2,
      step: 1,
      create: function (event, ui) {
        $("#slider-bar2").width($("#slider2").slider("value") * 50 + "%");
        $slider2changetext($("#slider2").slider("value"));
        $("#slider-bar2").attr('data-2', $("#slider2").slider("value"));
        $moneycount();
      },
      slide: function (event, ui) {
        $("#slider-bar2").width(ui.value * 50 + "%");
        $slider2changetext(ui.value);
        $("#slider-bar2").attr('data-2', ui.value);
        $moneycount();
      }
    });
  })();

  (function () {
    $("#slider3").slider({
      value: 1,
      min: 0,
      max: 3,
      step: 1,
      create: function (event, ui) {
        $("#slider-bar3").width($("#slider3").slider("value") * 33 + "%");
        $slider3changetext($("#slider3").slider("value"));
        $("#slider-bar3").attr('data-3', $("#slider3").slider("value"));
        $moneycount();
      },
      slide: function (event, ui) {
        $("#slider-bar3").width(ui.value * 33 + "%");
        $slider3changetext(ui.value);
        $("#slider-bar3").attr('data-3', ui.value);
        $moneycount();
      }
    });
  })();
});
