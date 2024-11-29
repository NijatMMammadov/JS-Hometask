import BaseURL from "./Api/BaseURL.js";
import { GetAllData, GetDataById } from "./Api/request/requests.js";

let row = document.querySelector(".row");
let sort=document.querySelector("#sort");

function GetProducts() {
  GetAllData(`${BaseURL}/products`)
    .then(res =>ShowProducts(res.data))
}

GetProducts()

function ShowProducts(products) {
  products.forEach((product) => {
    row.innerHTML += `
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div data-id=${product.id} class="card my-3 mx-4" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="Phone">
            <div class="card-body">
              <h5 class="card-brend">${product.brand} , ${product.model}</h5>
              <p class="card-year"><b>Phone year</b> : ${product.year}</p>
              <p class="card-text"><b>Price</b> : ${product.price}$</p>
            <div class="d-flex justify-content-end">  
                <button class="addToFavorites btn btn-danger mx-1"><i class="fa-regular fa-heart"></i></button>
              <button class="addToBasket btn btn-outline-danger"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
            </div>
          </div>
        </div>
        `

    document.querySelectorAll(".card").forEach(cardElement => {
      cardElement.addEventListener("click", (e) => {
        window.location.href = "./detail.html?id=" + cardElement.dataset.id
      })
    })


  });
}


// sort.addEventListener("input",(e)=>{
//   let sortedData;

//   switch (e.target.value) {
//     case value:
//       sortedData=
//       break;
  
//     default:
//       break;
//   }

// })



