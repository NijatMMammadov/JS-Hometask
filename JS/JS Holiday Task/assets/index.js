let myArray = [
    {
        "image": "./assets/images/children_3.jpg.webp",
        "Name": "Mark ,",
        "age": 12 + "years old",
    },
]

let navbar = document.querySelector("navbar");
let childrenBoxes = document.querySelector("children-boxes");
let box = document.querySelector("box");


document.addEventListener("DOMContentLoaded",Show(myArray))


function Show(myArray) {
    myArray.forEach(myArray => {
        childrenBoxes.innerHTML`
        <div class="box">
                        <div class="box-image">
                            <img src=${myArray.image} alt="">
                        </div>
                        <div class="box-info">
                            <p class="p-name">${myArray.Name} </p>
                            <p class="p-age"> ${myArray.age}</p>
                        </div>
                        <div class="button-dd">
                            <button class="btn-details">Detils</button>
                            <button class="btn-delete">Delete</button>
                        </div>
                    </div> `
    })
}

Show(myArray)

//          ``

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY
    let navbar = document.querySelector("navbar");
    if (scrollPosition > 50) {
        console.log("salam");
        navbar.style.backgroundColor = "red"
        navbar.style.color = "white"
    } else {
        navbar.style.backgroundColor = "white"
        navbar.style.color = "black"
    }
})