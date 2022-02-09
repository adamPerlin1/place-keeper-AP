'use strict';

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const eilat = { lat: 29.55805, lng: 34.94821 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 7,
        center: eilat,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: eilat,
        map: map,
    });
    console.log(map);
}