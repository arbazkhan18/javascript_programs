let cleanRoom = ( () => {
    return new Promise( (resolve, reject) => {
        resolve()
        console.log('cleaning the room')
    })
})

let collectGarbage = ( () => {
    return new Promise( (resolve,reject) => {
        resolve()
        console.log('collecting the garbage')
    })
})

let winIceCream = ( () => {
    return new Promise( (resolve, reject) => {
        resolve()
        console.log('eating the won icecream ')
    })
})

Promise.all([ cleanRoom(), collectGarbage(), winIceCream()]).then( ()=> {
    console.log('finally!!!    all the promises are finished')
})