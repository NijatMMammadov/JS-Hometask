import BaseURL from "./Api/BaseURL.js";
import {GetDataById } from "./Api/request/requests.js";

let row = document.querySelector(".row");

function GetPhone() {
    GetDataById(`${BaseURL}/products/${id}`)
        .then(res => ShowPhones(res.data))
}

GetPhone()

function ShowPhones(phones){
    phones.forEach(({image,model,brand,year,price,operatingSystem}) => {
        row.innerHTML+=`
            <div class="col-6">.
                <img src="${image}" alt="">
            </div>
            <div class="col-6">.
                <div class="row-info">
                    <h5 class="card-brend"> <b>Model: </b> ${model} ,<b> Brand: </b> ${brand}</h5>
                    <p class="card-text"><b>Operating System: </b> ${operatingSystem}</p>
                    <p class="card-sys"><b>Phone year: </b>${year}</p>
                    <p class="card-text"><b>Price: </b>${price} $</p>
                </div>
            </div>
        `
    });
}