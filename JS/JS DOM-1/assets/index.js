let body = document.body
let container = document.createElement("div")
container.className = "container"

let card = document.createElement("div")
card.className = "card"
card.innerText = "960x360px"

let boxes = document.createElement("div")
boxes.className = "boxes"
//----------------------------------------

for (let i = 0; i < 3; i++) {
    let box = document.createElement("div")
    box.className = "box"

    boxes.appendChild(box)

    let boxImage = document.createElement("div")
    boxImage.className = "box-image"
    boxImage.innerText = "290x180px"

    let boxInfo = document.createElement("div")
    boxInfo.className = "box-info"

    box.append(boxImage, boxInfo)

    let parag1 = document.createElement("h3")
    parag1.innerText = "Lorem, ipsum dolor."

    let parag2 = document.createElement("p")
    parag2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, asperiores."

    let parag3 = document.createElement("p")
    parag3.innerText = "Read More"

    boxInfo.append(parag1, parag2, parag3)

}

body.appendChild(container)
container.append(card, boxes)
