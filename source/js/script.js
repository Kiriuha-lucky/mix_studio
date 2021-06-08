'use strict';

jQuery(document).ready(function () {
  $(".page-header__nav-wrapper").fadeOut();
  $(".page-header__nav-toggle").click(function (e) {
    $(".page-header").toggleClass('page-header--open');
    $(".page-header__nav-wrapper").fadeToggle();
  });

  $(".questions__item").bind('click', function (e) {
    $(".questions__item").removeClass('questions__item--open');
    $(this).addClass('questions__item--open');
  });

  $(".page-header__nav-list a").click(function (e) {
    $(".page-header").toggleClass('page-header--open');
    $(".page-header__nav-wrapper").fadeOut();
  });

  $(document).click(function (e) {
    var div = $(".page-header__nav");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $(".page-header").removeClass('page-header--open');
      $(".page-header__nav-wrapper").fadeOut();
    }
  });

  $("#politic").click(function (e) {
    $(".popup").addClass('popup--open');
    $("body").addClass('body__block');
  });

  $("#popup__close").click(function (e) {
    $(".popup").removeClass('popup--open');
    $("body").removeClass('body__block');
  });

  $(document).click(function (e) {
    var div = $("#popup");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $(".popup").removeClass('popup--open');
      $("body").removeClass('body__block');
    }
  });

  $('#owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      768: {
        items: 1,
        margin: 0
      },
      1290: {
        items: 1,
        margin: 0
      }
    }
  });

  $('#owl-carousel2').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
    dots: false,
    center: true,
    autoWidth: true,
    nav: false,
    responsive: {
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

  // $('#owl-carousel3').owlCarousel({
  //   items: 1,
  //   loop: true,
  //   autoplay: true,
  //   autoplayHoverPause: true,
  //   dots: false,
  //   // center: true,
  //   nav: false,
  //   callbacks: true,
  //   onChanged: function(event) {
  //     console.log(event.type);
  //     $(".steps__item").removeClass("steps__item--check");
  //     $(".steps__item").eq(event.item.index).addClass("steps__item--check");
  //   }
  // });

  $(function () {
    $("a[href^='#']").click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(_href).offset().top - 200 + "px"
      });
      return false;
    });
  });



  var $moneycount = function () {
    var $slider1 = parseInt($("#slider-bar").attr('data-1'));
    var $slider2 = parseInt($("#slider-bar2").attr('data-2'));
    var $slider3 = parseInt($("#slider-bar3").attr('data-3'));
    var $money__week = $("#money--week");
    var $money__month = $("#money--month");
    var $money__year = $("#money--year");
    var $english = 0;
    var $days = 0;

    if ($slider2 == 4) {
      $english = 1.2;
    } else if ($slider2 == 3) {
      $english = 1.15;
    } else if ($slider2 == 2) {
      $english = 1.1;
    } else if ($slider2 == 1) {
      $english = 1.05;
    } else {
      $english = 1;
    };

    if ($slider3 == 4) {
      $days = 1.2;
    } else if ($slider3 == 3) {
      $days = 1.15;
    } else if ($slider3 == 2) {
      $days = 1.1;
    } else if ($slider3 == 1) {
      $days = 1.05;
    } else {
      $days = 1;
    };
    var $sum__week = Math.round(($slider1 + 3) * 75 * $english * $days);
    var $sum__month = Math.round($sum__week * 4.3);
    var $sum__year = Math.round($sum__month * 12);

    $money__week.text(($sum__week) + " $");
    $money__month.text(($sum__month) + " $");
    $money__year.text(($sum__year) + " $");
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
        $slider2text.text('нулевой');
        break;
      case 1:
        $slider2text.text('начальный');
        break;
      case 2:
        $slider2text.text('средний');
        break;
      case 3:
        $slider2text.text('продвинутый');
        break;
      case 4:
        $slider2text.text('свободный');
        break;
    }
  };

  (function () {
    $("#slider2").slider({
      value: 1,
      min: 0,
      max: 4,
      step: 1,
      create: function (event, ui) {
        $("#slider-bar2").width($("#slider2").slider("value") * 25 + "%");
        $slider2changetext($("#slider2").slider("value"));
        $("#slider-bar2").attr('data-2', $("#slider2").slider("value"));
        $moneycount();
      },
      slide: function (event, ui) {
        $("#slider-bar2").width(ui.value * 25 + "%");
        $slider2changetext(ui.value);
        $("#slider-bar2").attr('data-2', ui.value);
        $moneycount();
      }
    });
  })();

  var $slider3changetext = function (num) {
    switch (num) {
      case 0:
        $slider3text.text('нет опыта');
        break;
      default:
        $slider3text.text('месяцев');
        break;
    }
  };

  (function () {
    $("#slider3").slider({
      value: 1,
      min: 0,
      max: 4,
      step: 1,
      create: function (event, ui) {
        $("#slider-bar3").width($("#slider3").slider("value") * 25 + "%");
        $slider3changetext($("#slider3").slider("value"));
        $("#slider-bar3").attr('data-3', $("#slider3").slider("value"));
        $moneycount();
      },
      slide: function (event, ui) {
        $("#slider-bar3").width(ui.value * 25 + "%");
        $slider3changetext(ui.value);
        $("#slider-bar3").attr('data-3', ui.value);
        $moneycount();
      }
    });
  })();

  $("#phone").mask("9 (999) 999-99-99");
  $('.lazy').Lazy();

  function toggleHeader() {
    var scroll_status = $(document).scrollTop();
    if (scroll_status > 0)
      $(".page-header").addClass("page-header__scroll");
    else
      $(".page-header").removeClass("page-header__scroll");
  };

  $(document).scroll(function () {
    toggleHeader();
  });

  // var $step=1;

  // var $steps = function (step) {
  //   $(".steps__item").removeClass("steps__item--check");
  //   $(".steps__item").eq(step).addClass("steps__item--check");
  //   $step = $step + 1;
  // };

  // setInterval($steps($step), 1000);

  $(".steps__item").bind('click', function (e) {
    $(".steps__item").removeClass("steps__item--check");
    $(this).addClass("steps__item--check");
    $(".steps__slider .steps__item-image").attr("src", $(this).attr('data-step'));
  });
});
