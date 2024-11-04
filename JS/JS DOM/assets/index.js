let body = document.body

let container = document.createElement("div")
container.className = "container"

let card = document.createElement("div")
card.className = "card"
card.innerText = "960x360px"

let boxes = document.createElement("div")
boxes.className = "boxes"

let box1 = document.createElement("div")
box1.className = "box"

let boxImage1 = document.createElement("div")

boxImage1.className = "box-image"
boxImage1.innerText = "290x180px"

let boxInfo1 = document.createElement("div")
boxInfo1.className = "box-info"

let parag1 = document.createElement("h3")
parag1.innerText = "Lorem, ipsum dolor."

let parag2 = document.createElement("p")
parag2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, asperiores."

let parag3 = document.createElement("p")
parag3.innerText = "Read More"

let box2 = document.createElement("div")
box2.className = "box"

let boxImage2 = document.createElement("div")
boxImage2.className = "box-image"
boxImage2.innerText = "290x180px"

let boxInfo2 = document.createElement("div")
boxInfo2.className = "box-info"

let paragg1 = document.createElement("h3")
paragg1.innerText = "Lorem, ipsum dolor."

let paragg2 = document.createElement("p")
paragg2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, asperiores."

let paragg3 = document.createElement("p")
paragg3.innerText = "Read More"



let box3 = document.createElement("div")
box3.className = "box"

let boxImage3 = document.createElement("div")
boxImage3.className = "box-image"
boxImage3.innerText = "290x180px"

let boxInfo3 = document.createElement("div")
boxInfo3.className = "box-info"

let paraggg1 = document.createElement("h3")
paraggg1.innerText = "Lorem, ipsum dolor."

let paraggg2 = document.createElement("p")
paraggg2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, asperiores."

let paraggg3 = document.createElement("p")
paraggg3.innerText = "Read More"


body.appendChild(container)
container.append(card, boxes)
boxes.append(box1, box2, box3)
box1.append(boxImage1, boxInfo1)
box2.append(boxImage2, boxInfo2)
box3.append(boxImage3, boxInfo3)
boxInfo1.append(parag1, parag2, parag3)
boxInfo2.append(paragg1, paragg2, paragg3)
boxInfo3.append(paraggg1, paraggg2, paraggg3)
