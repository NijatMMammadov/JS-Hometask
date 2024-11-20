import { GetSupplierById } from "./Requests/Suppliers.js"
import { BaseURL } from "./BaseURL.js"

let id= new URLSearchParams(window.location.search).get("id");
let container= document.querySelector("container");
let card =document.querySelector("card");



GetSupplierById(BaseURL,id)
.then(res=>ShowSupplier(res.supplier)
)

function ShowSupplier(obj){
    container.innerHTML=`
        <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${obj.companyName}</h5>
              <p class="card-text">${obj.contactName}</p>
              <p class="card-text">${obj.contactTitle}</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
    `

}

ShowSupplier()