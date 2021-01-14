// // Scope
// // Javascript menggunakan konsep Function Scope

// // Global Scope / Window Scope
// var i = 100;

// // "use strict";

// function test(){
//     // 'var' menjadikan variabelnya lokal, jika tidak ada 'var' maka akan menimpa variabel globalnya
//     var i = 300;
//     // Menggunakan "use strict" di luar function agar javascript mengerti bahwa i merupakan var lokal
//     // i = 300;

//     // // Bisa mengakses var i;
//     // console.log(i);

//     // Jika ingin mengakses variable global, maka menggunakan window
//     // console.log(window.i);
// }

// test();

// // tidak bisa mengakses var j yang berada pada function test()
// console.log(i);







var a = 1;
function test(a){
    console.log(a);
}

// yang ditampilkan adalah angka 2, dan var a global tidak di pakai. Argument akan selalu menjadi local variable
test(2);

// ini akan menganbil nilai dari variable global
test(a);

// ini mengambil nilai var a global
console.log(a);