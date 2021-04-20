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

  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    margin: 15,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    dots: false
  });


});
