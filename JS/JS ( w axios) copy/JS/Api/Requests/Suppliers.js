export async function GetAllSuppliers(url){
    let supplier
    let error

    await axios.get(url)
        .then(res => supplier = res.data)
        .catch(err => error = err)

    return {
        supplier,
        error
    }

}

























// export async function GetSupplierById(url,id){
//     let supplier
//     let error

//     await axios.get(`${url} / ${id}`)
//         .then(res => supplier = res.data)
//         .catch(err => error = err)
//     return{
//         supplier,
//         error
//     }

// }