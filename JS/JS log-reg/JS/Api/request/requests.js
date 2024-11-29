export async function GetAllData(url) {
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

export async function PostData(url, postdata) {
    let data
    let error

    await axios.post(url, postdata)
        .then(res => data = res.data)
        .catch(err => error = err)

    return {
        data,
        error
    }

}

export async function UpdateData(url, id, newdata) {
    let data
    let error

    await axios.put(`${url}/${id}`, newdata)
        .then(res => data = res.data)
        .catch(err => error = err)

    return {
        data,
        error
    }

}
