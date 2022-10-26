'use strict';

$(document).ready(function () {
    //РАСКРЫТИЕ ДРОПДАУНОВ
    $(document).on('click', ".dropdown__link", function () {
        $(this).toggleClass("active").parent().siblings().find(".dropdown__link").removeClass("active");
        $(this).parent().find('.dropdown__content').slideToggle().parent().siblings().find(".dropdown__content").slideUp();
    });
});