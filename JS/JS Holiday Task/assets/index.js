let myArray = [
    {
        "id": 1,
        "image": "./assets/images/children_3.jpg.webp",
        "surname": "Mark , ",
        "age": 12 + "years old",
    },
    {
        "id": 2,
        "image": "./assets/images/children_4.jpg.webp",
        "surname": "Andre ,",
        "age": 10 + "years old",
    },
    {
        "id": 3,
        "image": "./assets/images/children_5.jpg.webp",
        "surname": "Markau ,",
        "age": 11 + "years old-",
    }
]

let childrenBoxes = document.querySelector(".children-boxes");
let box = document.querySelector(".box");
let secform = document.querySelector("#form");
let form = document.querySelector(".form");
let surname = document.querySelector("#surname");
let age = document.querySelector("#age");
let image = document.querySelector("#image");
let btnAdd = document.querySelector(".btn-add");
let search = document.querySelector("#search");
let btnList = document.querySelector(".btn-list");


//document.addEventListener("DOMContentLoaded", ShowmyArray(myArray))

document.addEventListener("DOMContentLoaded", () => ShowmyArray(myArray));



function ShowmyArray() {
    myArray.forEach((item) => {
        childrenBoxes.innerHTML += `
                    <div class="box">
                        <div class="box-image">
                            <img src=${item.image} alt="">
                        </div>
                        <div class="box-info">
                            <p class="p-name">${item.surname} </p>
                            <p class="p-age"> ${item.age}</p>
                        </div>
                        <div class="button-dd">
                            <button class="btn-details" data-id="${item.id}">Details</button>
                            <button class="btn-delete" data-id="${item.id}">Delete</button>
                            <button class="btn-edit" data-id="${item.id}">Edit</button>
                        </div>
                    </div> `
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (surname.value.trim() != "" && age.value.trim() != "" && image.value.trim() != "") {
        let id = crypto.randomUUID();
        let newArray = {
            id: id,
            image: image.value,
            surname: surname.value,
            age: age.value
        };
        myArray.push(newArray);
        ShowmyArray(myArray);
        console.log(myArray);
    } else {
        alert("Empty");
    }
});


// ``

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY
    let navbar = document.querySelector(".navbar");
    if (scrollPosition > 50) {
        navbar.style.backgroundColor = "rgb(188, 81,72)";
        navbar.style.color = "white";
    } else {
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
    }
})












