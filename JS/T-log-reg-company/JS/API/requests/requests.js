import { baseUrl } from "../BaseURL.js"

export async function postUser(){
    let data
    let error

    await axios.post(`${baseUrl}+"users"`,newusers )
    .then(res=>res.data)
    .catch(error=>error=error)

    return{
        data,
        error
    }
}