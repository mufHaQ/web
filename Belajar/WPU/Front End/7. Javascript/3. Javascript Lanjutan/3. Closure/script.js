// // Closure 

// function init(){
// 	// let nama = 'Dliyaulhaq';
// 	// let umur = '16 Tahun';
// 	return function(nama){
// 		// let nama = 'Mufliansyah';
// 		console.log(nama);
// 		// console.log(umur);
// 	}
// 	// tampilNama();
// 	// Untuk menampilkan objectnya
// 	// console.dir(tampilNama);
// 	// return tampilNama;

// }
// // init();
// let panggilNama = init();
// panggilNama('Dliyaulhaq');
// panggilNama('Mufliansyah');




// Function Factories

// function ucapSalam(waktu){
// 	return function(nama) {
// 		console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
// 	}
// }

// let selamatPagi = ucapSalam('Pagi');
// let selamatSiang = ucapSalam('Siang');
// let selamatSore = ucapSalam('Sore');
// let selamatMalam = ucapSalam('Malam');

// selamatPagi('Dliyaulhaq');
// selamatSore('Mufliansyah');

// console.dir(selamatPagi);

let add = (function(){
	let counter = 0;
	return function() {
		return ++counter;
	};
})();



console.log(add());
console.log(add());
console.log(add());