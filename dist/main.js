/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scaffold.js
function initLoad() {
    const container = getContainer();
    const navbar = makeNavbar()
    container.appendChild(navbar);

}

function getContainer() {
    return document.getElementById("content")
}

function makeNavbar() {
    let navbar = document.createElement("nav")
    let navItems = ["home", "menu", "contact"]
    navItems.forEach(item =>
                            navbar.appendChild(makeButton(item))  
        )
    return navbar;
} 

function makeButton(navItem) {
    let button = document.createElement("button");
    button.setAttribute("id", `${navItem}`)
    button.textContent = `${navItem}`;
    return button;
}




;// CONCATENATED MODULE: ./src/home.js


const container = document.getElementById("content")

function makeHome() {
    let div = document.createElement("div")
    let title = document.createElement("h1")
    let img = document.createElement("img")
    let description = document.createElement("p")

    title.textContent = "About Us"
    title.classList.add("title")
    div.appendChild(title)

    img.setAttribute("src", "https://i.imgur.com/vzGhITt.jpeg")
    img.classList.add("image")
    div.appendChild(img)

    description.textContent = "We're a happy restaurant in a happy place"
    description.classList.add("paragraph")
    div.appendChild(description);

    div.classList.add("contentContainer")

    container.appendChild(div)
}




;// CONCATENATED MODULE: ./src/menu.js
const menu_container = document.getElementById("content")

function makeMenu() {
    let div = document.createElement("div")
    let title = document.createElement("h1")
    let img = document.createElement("img")
    let description = document.createElement("p")

    title.textContent = "Menu"
    title.classList.add("title")
    div.appendChild(title)

    img.setAttribute("src", "https://i.imgur.com/vzGhITt.jpeg")
    img.classList.add("image")
    div.appendChild(img)

    description.textContent = "Whats for Dinner"
    description.classList.add("paragraph")
    div.appendChild(description);

    div.classList.add("contentContainer")

    menu_container.appendChild(div)
}




;// CONCATENATED MODULE: ./src/contact.js

const contact_container = document.getElementById("content")

function makeContact() {
    let div = document.createElement("div")
    let title = document.createElement("h1")
    let img = document.createElement("img")
    let description = document.createElement("p")

    title.textContent = "Contact"
    title.classList.add("title")
    div.appendChild(title)

    img.setAttribute("src", "https://i.imgur.com/vzGhITt.jpeg")
    img.classList.add("image")
    div.appendChild(img)

    description.textContent = "Get in touch "
    description.classList.add("paragraph")
    div.appendChild(description);

    div.classList.add("contentContainer")

    contact_container.appendChild(div)
}




;// CONCATENATED MODULE: ./src/index.js





const src_container = document.getElementById("content")

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
    while (src_container.firstChild) {
        src_container.removeChild(src_container.firstChild)
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
/******/ })()
;