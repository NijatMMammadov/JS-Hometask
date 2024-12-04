import { baseUrl } from "./API/BaseURL.js";
import { postUser } from "./API/requests/requests.js";

let regForm=document.querySelector(".form");
let regName=document.querySelector("#name");
let regEmail=document.querySelector("#email");
let regPassword=document.querySelector("#password");
let regImage=document.querySelector("#image");
let regButton=document.querySelector(".btn-register");



let newusers={
    name:regName.value,
    email:regEmail.value,
    password:regPassword.value,
    // image:regImage.value
}

postUser(baseUrl,newusers)

console.log(newusers);

