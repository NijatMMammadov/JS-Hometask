import { GetAllSuppliers } from "./Api/Requests/Suppliers";
import { BaseURL } from "./Api/BaseURL";


function GetData(){
    GetAllSuppliers(BaseURL)
    .then(res=>console.log(res))
}