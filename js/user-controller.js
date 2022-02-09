'use strict';

function onInit() {
    window.addEventListener('submit', (ev) => {
        ev.preventDefault()
    })
    renderUI()
}

function renderUI(){
    const user = getUser()
    console.log(user)
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = user['bgc-color']
    elBody.style.color = user['txt-color']

}

function onSubmit(ev) {
    console.log(ev);
    const elInputs = Array.from(document.querySelectorAll('input:not([type="submit"])'))
    const keys = ['email', 'age', 'bgc-color', 'txt-color', 'dob', 'birth-time']
    const userInfo = elInputs.reduce((acc, input, currIdx) => {
        acc[keys[currIdx]] = input.value
        return acc
    }, {})
    setUser(userInfo)
    renderUI()
}