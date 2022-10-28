'use strict';

$(document).ready(function () {
    //ПОДКЛЮЧЕНИЕ КАЛЕНДАРЯ
    new AirDatepicker('#firstSessionDate', {
        // inline: true,
        navTitles: {
            days: 'MMMM yyyy'
        },
        autoClose: true
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        let div = $(".input-choice__wrapper"); // 
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active');
            if (div.find('.time-choice__wrapper')) {
                div.find('.time-choice__wrapper').removeClass('active');
            } // скрываем его
        }
    });

    //ИНПУТЫ С ВЫБОРОМ ВРЕМЕНИ И ДАТЫ
    $(document).on('click', '.input-choice__wrapper', function () {
        $(this).addClass('active');
        if ($(this).find($('.input-choice-time'))) {
            $(this).find('.time-choice__wrapper').addClass('active');
        }
    });

    //ПЕРЕДАЧА ВРЕМЕНИ С ВЫПАДАШКИ В ИНПУТ
    $(document).on('click', '.time-choice__item', function (e) {
        e.stopPropagation();
        let val = $(this).find('span').text();
        $(this).parents('.input-choice__wrapper').find('.input-choice').val(val);
        $(this).parents('.time-choice__wrapper').removeClass('active');
        $(this).parents('.input-choice__wrapper').removeClass('active');
    });
})