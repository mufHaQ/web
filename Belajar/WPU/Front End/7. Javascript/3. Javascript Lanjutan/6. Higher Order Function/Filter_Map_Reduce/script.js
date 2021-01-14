// Filet, Map & Reduce

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
console.log(angka);




// Mencari angka >= 3

// Filter
// const angkaBaru = angka.filter(e => e >= 3);
// console.log(angkaBaru);

// for
// const angkaBaru = [];
// for (let i = 0; i <= angka.length; i++) {
//     if (angka[i] >= 3) {
//         angkaBaru.push(angka[i]);
//     }
// }
// console.log(angkaBaru);




// Map
// kalikan semua angka dengan 2
// const angkaBaru = angka.map(a => a * 2);
// console.log(angkaBaru);





// Reduce
// Angka defaultnya adalah 0
// Jumlah seluruh element pada array
// const angkaBaru = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(angkaBaru);





// Method Chaining
// cari angka > 5
// Kalikan 3
// Jumlah
// const hasil = angka.filter(a => a > 5).map(a => a * 3).reduce((acc, curr) => acc + curr);
// console.log(hasil);
