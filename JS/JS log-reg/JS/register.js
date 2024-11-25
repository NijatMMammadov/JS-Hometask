
let regName = document.querySelector("#reg-name");
let regSurname = document.querySelector("#reg-surname");
let regEmail = document.querySelector("#reg-email");
let regPassword = document.querySelector("#reg-password");


let newdata = {
    name: regName.value,
    surname:regSurname.value,
    email:regEmail.value,
    password:regPassword.value,
    isAdmin:false,
    favorites:[]
}

console.log(newdata);







