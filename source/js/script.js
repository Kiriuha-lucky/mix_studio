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
    if (!div.is(e.target)
      &&
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
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0:{
          items:2,
          margin: 20
      },
      768:{
          items:2,
          margin: 30
      },
      1290:{
          items:6,
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
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0:{
          items:3,
          margin: 20
      },
      768:{
          items:2,
          margin: 30
      },
      1290:{
          items:3,
          margin: 30
      }
  }
  });

  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});




});
