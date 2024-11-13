let myArray = [
    {
        "image": "./assets/images/children_3.jpg.webp",
        "Name": "Mark ,",
        "age": 12 + "years old",
    },
    {
        "image": "./assets/images/children_4.jpg.webp",
        "Name": "Andre ,",
        "age": 10 + "years old",
    },
    {
        "image": "./assets/images/children_5.jpg.webp",
        "Name": "Markau ,",
        "age": 11 + "years old",
    }
]

let navbar = document.querySelector(".navbar");
let childrenBoxes = document.querySelector(".children-boxes");
let box = document.querySelector(".box");


document.addEventListener("DOMContentLoaded", Show(myArray))


function Show() {
    myArray.forEach(myArray => {
        childrenBoxes.innerHTML += `
                    <div class="box">
                        <div class="box-image">
                            <img src=${myArray.image} alt="">
                        </div>
                        <div class="box-info">
                            <p class="p-name">${myArray.Name} </p>
                            <p class="p-age"> ${myArray.age}</p>
                        </div>
                        <div class="button-dd">
                            <button class="btn-details">Details</button>
                            <button class="btn-delete">Delete</button>
                        </div>
                    </div> `
    })

}

// Show(myArray)

//          ``

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY
    let navbar = document.querySelector(".navbar");
    if (scrollPosition > 50) {
        console.log("salam");
        navbar.style.backgroundColor = "rgb(188, 81,72)";
        navbar.style.color = "white";
    } else {
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
    }
})












