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
const angkaBaru = angka.map(a => a * 2);
console.log(angkaBaru);