var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

const time = 10000

// readBooksPromise(time, books[0])
//     .then((sisawaktu0) => {
//         readBooksPromise(sisawaktu0, books[1])
//             .then((sisawaktu1) => {
//                 readBooksPromise(sisawaktu1, books[2])
//                     .then((sisawaktu2) => {
//                         readBooksPromise(sisawaktu2, books[3])
//                             .then((sisawaktu3) => {
//                                 return sisawaktu3
//                             })
//                     })
//             })
//     })

const execute = async() => {
    const sisawaktu0 = await readBooksPromise(time, books[0])
    const sisawaktu1 = await readBooksPromise(sisawaktu0, books[1])
    const sisawaktu2 = await readBooksPromise(sisawaktu1, books[0])
    const sisawaktu3 = await readBooksPromise(sisawaktu2, books[0])
    
    return console.log('Selesai')
}

execute()