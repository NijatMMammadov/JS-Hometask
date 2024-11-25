import { BaseURL } from "./Api/BaseURL.js";
import { GetAllSuppliers, PostSupplier, GetSupplierById } from "./Api/Requests/Suppliers.js";

let option = document.querySelector(".option");

let addForm = document.querySelector("#add-form")
let addName = document.querySelector("#add-name");
let addDescription = document.querySelector("#add-description");
let btnAdd = document.querySelector(".btn-add");

let editForm = document.querySelector("#edit-form")
let editName = document.querySelector("#edit-name");
let editDescription = document.querySelector("#edit-description");
let btnEdit = document.querySelector(".btn-edit");
let overlay = document.querySelector(".overlay")
let editModal = document.querySelector(".edit-form")
let close = document.querySelector(".close")


function GetData() {
    GetAllSuppliers(BaseURL)
        .then(res => ShowSuppliers(res.data))
}
GetData()

function ShowSuppliers(data) {
    option.innerHTML = ""
    data.forEach(element => {
        option.innerHTML += `
            <div class="categories">
                <div class="categori-list">
                    <span class="span-parag">
                        <p>
                        ${element.name}
                        </p>
                        <p>
                        ${element.description}
                        </p>
                    </span>
                </div>
                <span class="span-btn">
                    <button class="btn btn-details">Details</button>
                    <button class="btn btn-edit" data-id=${element.id}>Edit</button>
                    <button class="btn btn-delete" data-id=${element.id}>Delete</button> 
                </span>
                
            </div>
        `

        let btnsEdit = document.querySelectorAll(".btn-edit")
        btnsEdit.forEach(btnEdit => {
            btnEdit.addEventListener("click", () => {
                let id = btnEdit.getAttribute("data-id")
                EditSupplier(id)
            })
        })
    });
}

addForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let newsupp = {
        name: addName.value,
        description: addDescription.value
    }

    PostSupplier(BaseURL, newsupp)
        .then(() => GetData())

    addName.value = ""
    addDescription.value = ""

})


function EditSupplier(id) {
    GetSupplierById(BaseURL, id)
        .then(res => {

            overlay.classList.replace("d-none", "d-block")
            editModal.classList.replace("d-none", "d-block")

            editName.value = res.data.name,
                editDescription.value = res.data.description

            editForm.addEventListener("submit", (e) => {
                e.preventDefault()
                let updateingdata = {
                    name: editName.value,
                    description: editDescription.value
                }
                console.log(updateingdata);
            })
        })

}

close.addEventListener("click", (e) => {
    e.preventDefault()
    overlay.classList.replace("d-block", "d-none")
    editModal.classList.replace("d-block", "d-none")
});












