import BaseURL from "./Api/BaseURL.js";
import { GetAllData, GetDataById } from "./Api/request/requests.js";


let btnDxl = document.querySelector(".btn-dxl");
let row = document.querySelector(".row");



function GetProducts() {
  GetAllData(`${BaseURL}/products`)
    .then(res => ShowProducts(res.data))
}

GetProducts()

function ShowProducts(products) {
  products.forEach((product) => {
    row.innerHTML += `
          <div data-id=${product.id} class="card my-3 mx-4"     style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-brend">${product.brand}</h4>
              <p class="card-model">Model: ${product.model}</p>
              <p class="card-sys">Operating System: ${product.operatingSystem}</p>
              <p class="card-sys">Phone Year: ${product.year}</p>
              <p class="card-text">Price: ${product.price}$</p>
            <div class="d-flex justify-content-end">  
                <button class="addToFavorites btn btn-danger mx-1"><i class="fa-regular fa-heart"></i></button>
              <button class="addToBasket btn btn-outline-danger"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
            </div>
          </div>
        `

    // document.querySelectorAll(".card").forEach(cardElement => {
    //   cardElement.addEventListener("click", (e) => {
    //     window.location.href = "detail.html" + cardElement.dataset.id
    //   })
    // })

    // let btnFav=document.querySelectorAll(".fav")

    // btnFav.addEventListener("click",()=>{

    // })
  });
}

btnDxl.addEventListener("click", () => {
  window.location.href = "login.html"
})












