const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (false) resolve('Se resolvio correctamente')
        else reject('Ocurrio un error')
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else {
            const error = new Error('Ups!')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(resp => console.log(resp))
    .catch(err => console.error(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => console.log("Array de results: ", response))
.catch(error => console.error(error))