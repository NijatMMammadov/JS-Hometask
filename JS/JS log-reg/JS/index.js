import BaseURL from "./Api/BaseURL.js";
import { GetAllData,GetDataById } from "./Api/request/requests.js";


let btnDxl =document.querySelector(".btn-dxl");
let row=document.querySelector(".row");



function GetProducts(){
    GetAllData(`${BaseURL}/products`)
    .then(res=>ShowProducts(res.data))
}

GetProducts()

function ShowProducts(products){
    products.forEach((product) => {
        row.innerHTML+=`
          <div class="card my-3 mx-4" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-brend">${product.brand}</h5>
              <h4 class="card-model">${product.model}</h4>
              <p class="card-sys">${product.operatingSystem}</p>
              <p class="card-sys">${product.year}</p>
              <p class="card-text">${product.price}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        `


        // let btnFav=document.querySelectorAll(".fav")

        // btnFav.addEventListener("click",()=>{

        // })
    });
}




btnDxl.addEventListener("click",()=>{
  window.location.href = "login.html"
})










