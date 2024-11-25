
export async function GetAllDatas(url) {
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

export async function GetDataById(url, id) {
    let data
    let error

    await axios.get(`${url}/${id}`)
        .then(res => data = res.data)
        .catch(err => error = err)

    return {
        data,
        error
    }

}

export async function PostData(url, newpost) {
    let data
    let error

    await axios.post(url, newpost)
        .then(res => data = res.data)
        .catch(err => error = err)

    return {
        data,
        error
    }

}

export async function GetUpdateData(url,id,updatedata) {
    let data
    let error

    await axios.put(`${url}/ ${id}`, updatedata)
        .then(res => data = res.data)
        .catch(err => error = err)

    return{
        data,
        error
    }
}



