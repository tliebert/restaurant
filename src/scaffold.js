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


export {initLoad}
