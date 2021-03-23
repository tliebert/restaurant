import { initLoad } from "./scaffold.js"
import { makeHome } from "./home.js"
import { makeMenu } from "./menu.js"
import { makeContact } from "./contact.js"

const container = document.getElementById("content")

const moduleAliases = {
    "menu": makeMenu,
    "home": makeHome,
    "contact": makeContact
}

let firstLoader = function() {
    resetPage()
    makeHome()
}

let resetPage = function () {
    wipeContent()
    initLoad()
    addListeners()
}

function wipeContent() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function tabClick(tabIdEvent) {
    resetPage()
    let moduleName = tabIdEvent.target.id;
    let funcToRun = moduleAliases[moduleName];
    funcToRun()
}

let addListeners = function() {
    let menuButton = document.querySelector("button#menu");
    let contactButton = document.querySelector("button#contact")
    let homeButton = document.querySelector("button#home")

    menuButton.addEventListener("click", tabClick)
    contactButton.addEventListener("click", tabClick)
    homeButton.addEventListener("click", tabClick)
}

firstLoader()