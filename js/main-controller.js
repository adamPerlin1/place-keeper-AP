'use strict'

function onInit() {
    window.addEventListener('submit', (ev) => {
        ev.preventDefault()
    })
    renderUI()
}