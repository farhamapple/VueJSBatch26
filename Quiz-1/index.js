console.log('-- Soal 1 --');

/*

Buatlah sebuah function dengan nama next_date() yang menerima 3 parameter tanggal, bulan, tahun dan mengembalikan nilai tanggal hari esok dalam bentuk string, dengan contoh input dan otput sebagai berikut.

*/
function next_date(tgl, bulan, tahun){
	var gabungDate = tahun+'-'+bulan+'-'+tgl;

	var hasil_gabung = new Date(gabungDate);
	hasil_gabung.setDate(hasil_gabung.getDate() + 1)
	var stringDate = hasil_gabung.toDateString();

	//return stringDate;

	// Parsing
	const splitDate = stringDate.split(" ");

	switch(splitDate[1]) {
	  case 'Jan':   { textBulan = 'Januari'; break; }
	  case 'Feb':   { textBulan = 'Februari'; break; }
	  case 'Mar':   { textBulan = 'Maret'; break; }
	  case 'Apr':   { textBulan = 'April'; break; }
	  case 'Mei':   { textBulan = 'Mei'; break; }
	  case 'Jun':   { textBulan = 'Juni'; break; }
	  case 'Jul':   { textBulan = 'Juli'; break; }
	  case 'Aug':   { textBulan = 'Agustus'; break; }
	  case 'Sep':   { textBulan = 'September'; break; }
	  case 'Oct':   { textBulan = 'Oktober'; break; }
	  case 'Nov':   { textBulan = 'November'; break; }
	  case 'Des':   { textBulan = 'Desember'; break; }

	  default:  { textBulan = 'Bulan tidak ada'; }

	}

	return splitDate[2] + " "+textBulan+" "+splitDate[3];

}

var tanggal = 29
var bulan = 2
var tahun = 2020

var hasil_1 = next_date(tanggal , bulan , tahun ) // output : 1 Maret 2020
console.log(hasil_1);

var tanggal = 31
var bulan = 12
var tahun = 2020

var hasil_2 = next_date(tanggal , bulan , tahun ) // output : 1 Januari 2021
console.log(hasil_2);

console.log('');
console.log('-- Soal 2 --')

function jumlah_kata(kalimat){
	var splitKalimat = kalimat.trim().split(' ');

	return splitKalimat.length
}

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kalimat_2 = "Saya Iqbal"


console.log(jumlah_kata(kalimat_1)) // 6
console.log(jumlah_kata(kalimat_2)) // 2

