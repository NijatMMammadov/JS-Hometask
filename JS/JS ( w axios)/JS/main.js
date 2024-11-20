import { GetAllSuppliers, GetSupplierById } from "./Api/Requests/Suppliers.js"
import { BaseURL } from "./Api/BaseURL.js";

let row = document.querySelector(".row");

function GetData() {
    GetAllSuppliers(BaseURL)
        .then(res => ShowSuppliers(res.supplier))
}

GetData()

function ShowSuppliers(array) {
    array.forEach(element => {
        row.innerHTML += `
        <div class="col my-1">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${element.companyName}</h5>
                      <p class="card-text">${element.contactName}</p>
                      <p class="card-text">${element.contactTitle}</p>
                      <a href="detail.html?id=${element.id}" class="btn btn-details btn-primary">Details</a>
                        
                    </div>
                  </div>
            </div>
        `
    });
}

// GetSupplierById(BaseURL,5)
// .then(res => console.log(res.supplier))







