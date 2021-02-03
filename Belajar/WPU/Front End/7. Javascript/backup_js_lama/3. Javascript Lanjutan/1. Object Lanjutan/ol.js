// Cara membuat object pada javascript





// 1. Object Literal
// Problem: tidak efektif untuk object yang banyak
// let siswa1 = {
//     nama: 'Dliyaulhaq Mufliansyah',
//     umur: '16 Tahun',
//     telp: '0123456789',
//     email: 'masbrowmess33@gmail.com',
//     jurusan: 'Rekayasa Perangkat Lunak',
//     energi: 10,

//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }

// let siswa2 = {
//     nama: 'Fahmi Bahtiar Adi Nugroho',
//     umur: '16 Tahun',
//     telp: '0987654321',
//     email: 'bahtiarfahmi@gmail.com',
//     jurusan: 'Rekayasa Perangkat Lunak',
//     energi: 9,

//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }





// 2. Function Declaration
// const methodSiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function (jam) {
//         this.energi += jam *2;
//         console.log(`Halo ${this.name}, selamat tidur!`);
//     }
// }

// function siswa(nama, energi) {
//     let siswa = {};
//     siswa.nama = nama;
//     siswa.energi = energi;
//     siswa.makan = methodSiswa.makan;
//     siswa.main = methodSiswa.main;
//     siswa.tidur = methodSiswa.tidur;
//     return siswa;
// }
// let ulhaq = siswa('Dliyaulhaq', 10);
// let fahmi = siswa('Fahmi Bahtiar', 15);





// 3. Constructor Function
// keyword new
// function siswa(nama, energi) {
// let siswa = {};
// this.nama = nama;
// this.energi = energi;

// this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
// }

// this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
// }

// return siswa;
// }
// let ulhaq = new siswa('Dliyaulhaq', 10);
// let fahmi = new siswa('Fahmi Bahtiar', 15);





// 4. object.create
// const methodSiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.name}, selamat tidur!`);
//     }
// }

// function siswa(nama, energi) {
//     let siswa = Object.create(methodSiswa);
//     siswa.nama = nama;
//     siswa.energi = energi;

//     return siswa;
// }
// let ulhaq = siswa('Dliyaulhaq', 10);
// let fahmi = siswa('Fahmi Bahtiar', 15);





// 5. Prototype
// function siswa(nama, energi) {
//     // let siswa = Object.create(methodSiswa);
//     // let siswa = {};
//     // let this = Object.create(siswa.prototype);

//     this.nama = nama;
//     this.energi = energi;

//     // return siswa;
//     // return this;
// }
// siswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }
// siswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return`Halo ${this.nama}, selamat bermain!`;
// }
// siswa.prototype.tidur = function (jam) {
//     this.energi += jam *2;
//     return`Halo ${this.nama}, selamat tidur!`;
// }
// let ulhaq = new siswa('Dliyaulhaq Mufliansyah', 10);


// versi class
// class Siswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }
//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }
//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }

// let ulhaq = new Siswa('Dliyaulhaq Mufliansyah', 15);
// let fahmi = new Siswa('Fahmi Bahtiar', 10);




// let angka = [];
// let angka = new Array();

// function Array(){
//     let this = Object.create(Array.prototype);
// }