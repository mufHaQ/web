// this pada arrow function

// conctructor function
// let siswa = function(nama, umur){
//     this.nama = nama;
//     this.umur = umur;
//     // console.log(this);
//     this.hello = function(){
//         console.log(`Hallo, nama saya ${nama}, dan saya berumur ${umur}`);
//     }
// }
// const ulhaq = new siswa('Dliyaulhaq', '16 Tahun');

// Arrow Function, tidak memiliki this
// let siswa = function (nama, umur) {
//     this.nama = nama;
//     this.umur = umur;
//     // console.log(this);
//     this.hello = () => {
//         console.log(`Hallo, nama saya ${nama}, dan saya berumur ${umur}`);
//     }
// }
// const ulhaq = new siswa('Dliyaulhaq', '16 Tahun');

// Object Literal
// const siswa1 = {
//     nama: 'Dliyaulhaq',
//     umur: '16 Tahun',
//     hello: function () {
//         console.log(`Hallo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
//     }
// }


// let siswa = function(nama, umur){
//     this.nama = nama;
//     this.umur = umur;
//     // console.log(this);
//     this.hello = function(){
//         console.log(`Hallo, nama saya ${nama}, dan saya berumur ${umur}`);
//     }
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }
// const ulhaq = new siswa('Dliyaulhaq', 16);



const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';
    if (this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
        // console.log(this);
    }, 500);
});