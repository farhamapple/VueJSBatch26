console.log('-- Soal 1 --');
var hasil = 'Grade -';
var nilai = 60;
/*
nilai >= 85 indeksnya A
nilai >= 75 dan nilai < 85 indeksnya B
nilai >= 65 dan nilai < 75 indeksnya c
nilai >= 55 dan nilai < 65 indeksnya D
nilai < 55 indeksnya E
*/
if(nilai >= 85){
	hasil = 'Grade A';

}else if(nilai >= 75 && nilai < 85){
	hasil = 'Grade B';

}else if(nilai >= 65 && nilai < 75){
	hasil = 'Grade C';

}else if(nilai >= 55 && nilai < 65 ){
	hasil = 'Grade D';
}else{
	hasil = 'Grade E';
}
console.log('Input : '+nilai)
console.log('Jawaban : '+hasil)
console.log('')

console.log('-- Soal 2 --');
var tanggal = 26;
var bulan = 10;
var textBulan = '';
var tahun = 1990;

switch(bulan) {
  case 1:   { console.log(textBulan = 'Januari'); break; }
  case 2:   { console.log(textBulan = 'Februari'); break; }
  case 3:   { console.log(textBulan = 'Maret'); break; }
  case 4:   { console.log(textBulan = 'April'); break; }
  case 5:   { console.log(textBulan = 'Mei'); break; }
  case 6:   { console.log(textBulan = 'Juni'); break; }
  case 7:   { console.log(textBulan = 'Juli'); break; }
  case 8:   { console.log(textBulan = 'Agustus'); break; }
  case 9:   { console.log(textBulan = 'September'); break; }
  case 10:   { console.log(textBulan = 'Oktober'); break; }
  case 11:   { console.log(textBulan = 'November'); break; }
  case 12:   { console.log(textBulan = 'Desember'); break; }
  default:  { console.log(textBulan = 'Undefined'); }}

console.log(tanggal + textBulan + tahun);
console.log('')

console.log('-- Soal 3 --');

/*
Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi n dan alas n. Looping boleh menggunakan syntax apa pun (while, for, do while).

Output untuk n=3 :

#
##
###

Output untuk n=7 :

#
##
###
####
#####
######
#######

*/
var hasil = '';
var panjang = 7;
for (var i = 0; i < panjang; i++) {
    for (var j = 0; j <= i; j++) {
        hasil += '#';
    }
    hasil += '\n';
}
console.log(hasil)

console.log('')

console.log('-- Soal 4 --');
var kalimat_1 = 'I Love Programming';
var kalimat_2 = 'I Love Javascript';
var kalimat_3 = 'I Love Vue Js';



var init = 1;
var loop = 100;
var cetak = 1;
var print = '';
while(init <= loop){
	switch(cetak){
		  case 1:   { print = kalimat_1; break; }
		  case 2:   { print = kalimat_2 ; break; }
		  case 3:   { print = kalimat_3 ; break; }
	}
	if(init % 3 == 0){
		console.log(init+' - '+ print );
		console.log('======');
		// Reset
		var cetak = 0;
	}else{
		console.log(init+' - '+ print);
	}
	
	init++;
	cetak++;
}


