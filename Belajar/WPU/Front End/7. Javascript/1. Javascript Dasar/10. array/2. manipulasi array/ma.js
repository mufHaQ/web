// Manipulasi Array

// 1. Menambah isi Array
// Cara 1
// var arr = ['a', 1, true];
// console.log(arr[2]);

// Cara 2
// var arr = [];
// arr[0] = 'Dliyaulhaq';
// arr[1] = 100;
// arr[2] = false;
// console.log(arr);



// 2. Menghapus isi array
// var ar = ['Ulhaq', 'Fahmi', 'Arga', 'Alga'];
// ar[2] = undefined;
// console.log(ar);



// 3. Menampilkan isi Array
// var ar = ['Ulhaq', 'Fahmi', 'Arga', 'Alga', 'Steve'];
// for (var i = 0; i < ar.length; i++){
//     console.log('Siswa ke-' + (i+1) + ' : ' + ar[i]);
// }



// 4. Method pada Array:
// -> length: Untuk mengetahui jumlah elemen yang ada pada array
// -> join: Untuk menggabungkan seluruh isi array, dan mengubahnya menjadi sebuah string
// -> push, pop, shift, unshift: Untuk menambah/menghapus elemen array
var ar = ['asda', 'qwe', 'dsdf', 'wqeq', 'gfsgfg'];



// Push & Pop untuk elemen terakhir
// Unshift & Shift untuk elemen pertama


// push: Menambah elemen array pada bagian terakhir
// unshift: Menambah elemen array pada bagian pertama
// ar.push('Raul', 'Zaebi', 'Kinanty');
// ar.unshift('Richa');

// pop: Menghilangkan elemen array pada bagian terakhir
// shift: Menghilangkan elemen array pada bagian pertama
// ar.pop(); 
// ar.shift();

// splice: Untuk menyisipkan sebuah elemen ditengah tengah sebuah array
// Rumus: splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...);
// ar.splice(2, 0, 'Zaebi', 'Raihan');

// slice: Untuk mengambil/mengiris beberapa bagian pada array untuk menjadi array yang baru.
// Rumus: slice(awal, akhir);
// var ar2 = ar.slice(0, 4);
// console.log(ar2.join(', '));

// foreach: Untuk melakukan looping pada array
ar.forEach(function(e, i){
    console.log(e);
});
// ar.forEach(function(a, i){
//     console.log('Siswa ke-' + (i+1) + ' adalah: ' + a);
// });

// map: Sama seperti forEach, tetapi bisa mengembalikan array
// var ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var ar2 = ar1.map(function(e){
//     // console.log(e);
//     return e * 2;
// });
// console.log(ar2.join(', '));

// sort: untuk mengurutkan isi arraynya
// var ar1 = [1, 3, 2, 4, 6, 5, 9, 8, 7, 10, 12, 11, 15, 13, 14];
// console.log(ar1.join(', '));
// ar1.sort(function(a, b){
//     return a-b;
// });
// console.log(ar1.join(', '));

// filter & find: Untuk mencari elemen pada array
// filter: Bisa mengembalikan banyak nilai
var ar1 = [1, 3, 2, 4, 6, 5, 9, 8, 7, 10, 12, 11, 15, 13, 14];
var ar2 = ar1.filter(function(x){
    return x > 5;
});
console.log(ar2.join(', '));

// find: Mengembalikan 1 nilai, tidak bisa menggunakan method join
var ar3 = ar1.find(function(x){
    return x > 5;
});
console.log(ar3);





// join
// console.log(ar.join(', '))