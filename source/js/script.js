'use strict';


jQuery(document).ready(function(){
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

    $(document).click(function (e){ // событие клика по веб-документу
		var div = $(".page-header__nav"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".page-header").toggleClass('page-header--open'); // скрываем его
		}
	});


});


