'use strict';

$(document).ready(function () {
    //ЭЛЕМЕНТЫ СПИСКА ВЫЕЗЖАЮТ СЛЕВА НА МОБИЛКЕ
    if ($(window).width() < 668) {
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                }
            });
        }

        let options = {
            threshold: [0.3]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.advantages__text-item');

        for (let elm of elements) {
            observer.observe(elm);
        }
    }
});