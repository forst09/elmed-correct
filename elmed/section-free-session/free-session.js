'use strict';

$(document).ready(function () {
    //ПОДКЛЮЧЕНИЕ КАЛЕНДАРЯ
    new AirDatepicker('#firstSessionDate', {
        inline: true,
        navTitles: {
            days: 'MMMM yyyy'
        },
        autoClose: true,
        minDate: new Date(),
    });

    $('.air-datepicker').addClass('hide');

    $(document).mouseup(function (e) { // событие клика по веб-документу
        let div = $(".input-choice__wrapper"); // 
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 && $('.air-datepicker-global-container').has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active');
            if (div.find('.time-choice__wrapper')) {
                div.find('.time-choice__wrapper').removeClass('active');
            } // скрываем его
            if (div.find('.air-datepicker')) {
                div.find('.air-datepicker').removeClass('active');
            } // скрываем его
        }
    });

    //ИНПУТЫ С ВЫБОРОМ ВРЕМЕНИ И ДАТЫ
    $(document).on('click', '.input-choice__wrapper', function () {
        $('.input-choice__wrapper').removeClass('active');
        $('.time-choice__wrapper').removeClass('active');
        $('.air-datepicker').removeClass('active');
        $(this).addClass('active');
        if ($(this).find($('.input-choice-time'))) {
            $(this).find('.time-choice__wrapper').addClass('active');
        }
        if ($(this).find($('.air-datepicker'))) {
            $(this).find('.air-datepicker').addClass('active');
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

    //ЗАКРЫТЬ КАЛЕНДАРЬ ПО КЛИКУ НА ЯЧЕЙКУ
    $(document).on('click', '.air-datepicker-cell', function (e) {
        e.stopPropagation();
        if (!($(this).hasClass('-disabled-'))) {
            $(this).parents('.air-datepicker').removeClass('active');
            $(this).parents('.input-choice__wrapper').removeClass('active');
        }
    });
})