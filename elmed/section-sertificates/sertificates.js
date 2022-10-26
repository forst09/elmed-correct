'use strict';

$(document).ready(function () {
    // ПОДКЛЮЧЕНИЕ СВАЙПЕРА В СЕКЦИИ НА ЭКРАНАХ >= 1024
    if ($(window).width() >= 1024) {

        //ПОИСК
        const swiperSertificates = new Swiper('.swiper-sertificates', {
            speed: 700,
            slidesPerView: 'auto',
            spaceBetween: 8,
            navigation: {
                nextEl: '.swiper-sertificates-next',
                prevEl: '.swiper-sertificates-prev',
            }
        });
    };
});