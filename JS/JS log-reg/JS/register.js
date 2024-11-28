import BaseURL from "./Api/BaseURL.js";
import { PostData } from "./Api/request/requests.js";


let resgisterForm= document.querySelector(".resgister-form");
let regName = document.querySelector("#reg-name");
let regSurname = document.querySelector("#reg-surname");
let regEmail = document.querySelector("#reg-email");
let regPassword = document.querySelector("#reg-password");


resgisterForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let postdata = {
        name:regName.value,
        surname:regSurname.value,
        email:regEmail.value,
        password:regPassword.value,
        isAdmin:false,
        favorites:[]
    }
    
    console.log(postdata);
    
    PostData(`${BaseURL}/users`,postdata)

})













