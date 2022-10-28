'use strict';

$(document).ready(function () {
    //УБРАТЬ КНОПКУ ПОКАЗАТЬ ПОЛНОСТЬЮ, ЕСЛИ ТЕКСТ ВМЕЩАЕТСЯ В БЛОК
    let jshide = $('.js-hide');
    jshide.each(function () {
        let texthideHeight = $(this).find('.text-hide').height();

        if (texthideHeight <= $(this).height()) {
            $(this).parents('.js-hide__parent').find('.btn-show__wrapper').hide();
            $(this).css('height', texthideHeight);
        }
    });

    // ПОКАЗАТЬ/СКРЫТЬ ТЕКСТ
    $(document).on('click', ".btn-show", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.js-hide__parent').find(".js-hide").css('height', '');
        }
        else {
            $(this).addClass('active');
            let h = $(this).parents('.js-hide__parent').find(".text-hide").css('height');
            $(this).parents('.js-hide__parent').find(".js-hide").css('height', h);
        }
    });

    //МАСКА НА ИНПУТЫ С ТЕЛЕФОНОМ
    jQuery('.input-phone').inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false
    });
});