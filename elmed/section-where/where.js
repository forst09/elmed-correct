$(document).ready(function () {
    // ПОДКЛЮЧЕНИЕ КАРТЫ
    let isMapLoaded = false;
    const jsMap = document.querySelector("#map");
    const renderMap = function (mapId = "map") {
        if ($("#map").length !== 0) {
            ymaps.ready(function () {
                let myMap = new ymaps.Map(`${mapId}`, {
                    center: [$(`#${mapId}`).attr("data-coords").split(",")[0],
                    $(`#${mapId}`).attr("data-coords").split(",")[1]],
                    zoom: $(window).width() > 667 ? 17 : 16,
                    controls: []
                }),

                    // Создаём макет содержимого ГЕОЛОКАЦИЯ.
                    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                        '<div class="icon-map"></div>'
                    ),
                    myPlacemarkWithContent = new ymaps.Placemark(
                        [$(`#${mapId}`).attr("data-coords").split(",")[0],
                        $(`#${mapId}`).attr("data-coords").split(",")[1]],
                        {},
                        {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: "default#image",
                            // Своё изображение иконки метки.
                            iconImageHref: "../image/map-logo.svg",
                            // Размеры метки.
                            iconImageSize: [71, 47],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-10, -80],

                            // Макет содержимого.
                            iconContentLayout: MyIconContentLayout,
                        }
                    );
                myMap.geoObjects
                    .add(myPlacemarkWithContent);

            });

        }
    };

    const creatMapsScript = function (id) {
        let scriptYMAPS = document.createElement("script");
        scriptYMAPS.src =
            "https://api-maps.yandex.ru/2.1/?apikey=e2ae43d9-0c0a-49c7-9736-80d055e3dcf2&lang=ru_RU";
        scriptYMAPS.setAttribute("async", "");
        document
            .querySelector("body")
            .insertAdjacentElement("beforeend", scriptYMAPS);
        scriptYMAPS.onload = function () {
            renderMap(id);
        };
    };

    const revealMapBlock = function (entries, observer) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;


        if (!isMapLoaded) {
            creatMapsScript();
            isMapLoaded = true;
        }
        observer.unobserve(entry.target);
    };

    const mapObserver = new IntersectionObserver(revealMapBlock, {
        root: null,
        threshold: 0.15,
    });

    if (jsMap) mapObserver.observe(jsMap);
});