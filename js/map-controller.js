'use strict'

function onInit() {
    window.addEventListener('submit', (ev) => {
        ev.preventDefault()
    })
    renderUI()
}
//map.setCenter(new google.maps.LatLng( 45, 19 )
function onCenterMap(){
    console.log('jjjj');
    map.setCenter(new google.maps.LatLng( 45, 19))
}