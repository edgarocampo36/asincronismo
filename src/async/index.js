const doSomething = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hice algo asincrono!'), 3000)
        : reject(new Error('Error: ' + error))
    })
}

const doSomethingAsync = async () => {
    const something = await doSomething()
    console.log(something)
}

console.log('Antes')
doSomethingAsync()
console.log('Despues')

const anotherFunction = async () => {
    try {
        const something = await doSomething()
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('Antes 2')
anotherFunction()
console.log('Despues 2')