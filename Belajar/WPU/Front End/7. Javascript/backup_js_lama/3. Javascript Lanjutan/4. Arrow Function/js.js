// Function Expression
// const tampilNama = function (nama){
// 	return `Halo, ${nama}`;
// }

// console.log(tampilNama('Dliyaulhaq Mufliansyah'));


// Function Arrow
// const tampilNama = (nama) => {
// 	return `Halo, ${nama}`; 
// }
// console.log(tampilNama('Dliyaulhaq Mufliansyah'));

// const tampilNama = (nama, waktu) => {
// 	return `Halo ${nama}, selamat ${waktu}.`;
// }
// console.log(tampilNama('Dliyaulhaq Mufliansyah', 'Pagi'));

// implicit return
// const tampilNama = nama => `Halo, ${nama}`; 
// console.log(tampilNama('Dliyaulhaq Mufliansyah'));

// const tampilNama = () => 'Hello World';
// console.log(tampilNama());

let siswa = ['Dliyaulhaq', 'Fahmi', 'Arga'];

// let jumlahHuruf = siswa.map(function(nama){
// 	return nama.length;
// });
// let jumlahHuruf = siswa.map(nama => nama.length);
// console.table(jumlahHuruf);

// Bentuk Object
let jumlahHuruf = siswa.map(nama => ({nama, jumlahHuruf: nama.length}));
console.table(jumlahHuruf);