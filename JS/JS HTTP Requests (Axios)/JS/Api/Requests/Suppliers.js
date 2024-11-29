export async function GetAllSuppliers(url) {
    let data
    let error

    await axios.get(url)
        .then(res => data = res.data)
        .catch(err => error = err)
    return {
        data,
        error
    }

}

export async function PostSupplier(url, newsupp) {
    let data
    let error

    await axios.post(url, newsupp)
        .then(res => data = res.data)
        .catch(err => error = err)
    return {
        data,
        error
    }
}

export async function GetSupplierById(url, id) {

    // console.log(url,id);
    
    let data
    let error

    await axios.get(`${url}/${id}`)
        .then(res => data = res.data)
        .catch(err => error = err)

        console.log(data);
        
    return {
        data,
        error
    }
}

export async function UpdateAllSupplier(url, id, updatedata) {
    let data
    let error
    await axios.put(`${url}/${id}`, updatedata)
        .then(res => data = res.data)
        .catch(res => error = res.err)

    return {
        data,
        error
    }
}   