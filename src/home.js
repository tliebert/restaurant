

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

export {makeHome}

