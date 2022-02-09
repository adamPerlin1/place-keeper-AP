'use strict';
const STORAGE_KEY = 'userDB'

var gUser

function getUser(){
    return loadFromStorage(STORAGE_KEY);
}

function saveUserToStorage() {
    saveToStorage(STORAGE_KEY, gUser)
}

function setUser(user){
    gUser = user
    saveUserToStorage()
}
