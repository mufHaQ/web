// Execution Context, Hoisting & Scope


// var nama = 'Dliyaulhaq';
// console.log(nama);


// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window


// let umur = 16;
// function sayHello(){
// 	console.log(`Hallo, nama saya ${nama}, umur saya ${umur} tahun.`)
// };

// function membuat Local Execution Context yang di dalamnya terdapat Creation Context dan Execution Phase
// Local Execution Context selain kita bisa mengakses window, kita juga punya akses ke arguments, di dalamnya ada hoisting

// let nama = 'Dliyaulhaq Mufliansyah';
// let username = 'awdlawjd0owmdawmda';

// function cetakURL(username){
// 	let instagramURL = 'https://instagram.com/';
// 	return instagramURL + username;

// }
// console.log(cetakURL('@awdlawjd0owmdawmda'));







// function a(){
// 	console.log('ini a');

// 	function b(){
// 		console.log('ini b')

// 		function c(){
// 			console.log('ini c');
// 		}
// 		c();
// 	}
// 	b();
// }
// a();





// function satu(){
// 	let nama = 'Dliyaulhaq';
// 	console.log(nama);
// }

// function dua(){
// 	console.log(nama);
// }

// console.log(nama);
// var nama = 'Fahmi';
// satu();
// dua();
// console.log(nama);