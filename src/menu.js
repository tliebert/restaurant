const container = document.getElementById("content")

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

    container.appendChild(div)
}

export {makeMenu}

