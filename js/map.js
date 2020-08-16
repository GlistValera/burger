var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12
    });
    myMap.behaviors.disable(['drag', 'scrollZoom']);

    myPlacemark = new ymaps.Placemark([59.97, 30.31], {
        hintContent: 'ул. Низкая д.5',
        balloonContent:  'Самые вкусные бургеры у нас'
    },
    {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    myPlacemark2 = new ymaps.Placemark([59.939085, 30.283012], {
        hintContent: 'ул. Низкая д.5', 
        balloonContent:  'Самые вкусные бургеры у нас'
        
    },
    {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    myPlacemark3 = new ymaps.Placemark([59.935989, 30.354956], {
        hintContent: 'ул. Низкая д.5', 
        balloonContent:  'Самые вкусные бургеры у нас'
    },
    {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
}