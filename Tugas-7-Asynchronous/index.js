// di index.js
var readBooks = require('./callback.js')
var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

//readBooks.readBooks(books.timeSpent, books).callback();

/*
lanjutkan code pada index.js untuk memanggil function readBooks. 
Buku yang akan dihabiskan adalah buku-buku di dalam array books. 
Pertama function readBooks menerima input waktu yang 
dimiliki yaitu 10000 ms (10 detik) dan books pada indeks ke-0. 
Setelah mendapatkan callback sisa waktu yang dikirim lewat callback, 
sisa waktu tersebut dipakai untuk membaca buku pada indeks ke-1. 
Begitu seterusnya sampai waktu habis atau semua buku sudah terbaca. 
Untuk melihat output, jalankan file index.js dengan node js :
*/

function waktuBaca(waktu, bukus, index){
    if(index < books.length){
        readBooks(waktu, books[index], (sisa) =>{
            if(sisa > 0){
                index += 1;
                waktuBaca(sisa, bukus, index);
            }
        });
    }
}

//waktuBaca(10000, books, 0);


console.log('-- Soal 2 --');


function waktuBacaPromise(waktu, bukus, index){
    if(index < books.length){
        readBooksPromise(waktu, books[index]).then((sisa) =>{
            if(sisa > 0){
                index += 1;
                waktuBacaPromise(sisa, bukus, index);
            }
        });
    }
}
waktuBaca(10000, books, 0);

