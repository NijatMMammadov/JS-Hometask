import BaseURL from "./Api/BaseURL.js";
import { GetAllData,GetDataById } from "./Api/request/requests.js";


let btnDxl =document.querySelector(".btn-dxl");
let row=document.querySelector(".row");



btnDxl.addEventListener("click",()=>{
    window.location.href = "login.html"
    console.log("sss");
    
})

function GetProducts(){
    GetAllData(`${BaseURL}/products`)
    .then(res=>ShowProducts(res.data))
}

GetProducts()

function ShowProducts(products){
    products.forEach((product) => {
        row.innerHTML+=`
         <div class="col my-3">
        <div class="card" style="width: 18rem;">
          <img src=${product.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.price}$</p>
            <div class="btns">
            <a href="#" data-id=${product.id} class="btn fav btn-outline-primary"><i class="fa-solid fa-heart"></i></a>
            <a href="#" class="btn btn-outline-danger"><i class="fa-solid fa-basket-shopping"></i> Səbətə at</a>
            </div>
          </div>
        </div>
      </div>
        `


        // let btnFav=document.querySelectorAll(".fav")

        // btnFav.addEventListener("click",()=>{

        // })
    });
}












