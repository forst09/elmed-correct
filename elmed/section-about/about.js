'use strict';

$(document).ready(function () {
    //ОТКРЫТИЕ ВИДЕО С СЕКЦИИ О НАС
    $(document).on('click', '.about__video-play', function (e) {
        e.preventDefault();
        let firstString = 'https://www.youtube.com/embed/';
        let link = $(this).attr('href');
        let newLink;
        if (link.indexOf('v=') !== -1) {
            let arrayLinks = link.split('v=');
            let secondString = arrayLinks[arrayLinks.length - 1];
            newLink = firstString + secondString;
        }
        else {
            newLink = link;
        }

        const fancybox = Fancybox.show([
            {
                src: newLink,
                type: 'iframe'
            }
        ])

    });
});