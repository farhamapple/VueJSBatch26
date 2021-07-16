// Soal 1.
console.log('-- Soal 1 --')
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort()

for(var i = 0; i < daftarHewan.length; i++){
	console.log(daftarHewan[i])
}

console.log('')
console.log('-- Soal 2 --')

var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }

function introduce(data){

	return "Nama saya "+data.name+", umur saya "+data.age+" tahun, alamat saya di "+data.address+", dan saya punya hobby yaitu "+data.hobby
}
var perkenalan = introduce(data)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming" 

console.log('')
console.log('-- Soal 3 --')

var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Iqbal")

function hitung_huruf_vokal(string){
	var jml = 0;

	for(var i = 0; i < string.length; i++){
		
		if(string[i].toUpperCase() == 'A' || string[i].toUpperCase() == 'I' || string[i].toUpperCase() == 'U' || string[i].toUpperCase() == 'E' || string[i].toUpperCase() == 'O'){
			jml = jml + 1
		}
	}

	return jml
}

console.log(hitung_1 , hitung_2) // 3 2

console.log('')
console.log('-- Soal 4 --')

function hitung(angka){

	return angka*2-2;
}

console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8

