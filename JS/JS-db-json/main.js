import BaseURL from "./Api/BaseURL.js";
import { GetAllDatas, GetDataById, PostData, GetUpdateData } from "./Api/Requests/AirportApi.js";

let row = document.querySelector(".row");
let addForm = document.querySelector(".add-form");
let addCountry = document.querySelector("#add-country");
let addCity = document.querySelector("add-city");
let addAirportName = document.querySelector("#add-airport-name");
let addImage = document.querySelector("#add-image");


function GetData() {
    GetAllDatas(BaseURL)
        .then(res => ShowData(res.data))
}

GetData()



function ShowData(data) {
    data.forEach(element => {
        row.innerHTML += `
        <div class="col my-2">
            <div class="card" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${element.country}</h5>
                    <p class="card-text">${element.city}</p>
                    <p class="card-text">${element.airport_name}</p>
                    <a href="" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
        `
    });
}



addForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let newdata = {
        id: 12,
        country: addCountry.value,
        city: addCity.value,
        airport_name: addAirportName.value,
        image: addImage.value
    }

    PostData(BaseURL, newdata)
        .then(() => GetData())

    addCountry.value = ""
    addCity.value = ""
    addAirportName.value = ""
    addImage.value = ""

})