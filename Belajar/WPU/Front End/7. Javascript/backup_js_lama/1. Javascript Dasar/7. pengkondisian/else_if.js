// Pengkondisian ELSE IF

// var angka = prompt("Masukkan angka: ");

// if (angka % 2 === 0){
//     console.log("Angka bernilai genap");
// }else if(angka % 2 === 1) {
//     console.log("Angka bernilai ganjil")
// }else {
//     console.log("Yang anda masukkan bukan angka")
// }

var noAngkot;

// var jumlahAngkot = prompt("Jumlah angkot: ");
// var angkotBeroperasi = prompt("Jumlah angkot yang beroperasi: ");
// var angkotLembur = prompt("Masukkan nomor angkot yang sedang lembur: ");


// for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log("Angkot No. " + noAngkot + " sedang beroperasi.");
//     } else if (noAngkot === 8){
//         console.log("Angkot No. " + noAngkot + " sedang lembur.");
//     } else {
//         console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
//     }
// }


// var jumlahAngkot = 10;
// var angkotBeroperasi = 6;

// for (noAngkot = 0; noAngkot <= jumlahAngkot; noAngkot++){
//     if (noAngkot <= angkotBeroperasi){
//         console.log("Angkot No. " + noAngkot + " sedang beroperasi.");
//     }else if (noAngkot === 8 || noAngkot === 10){
//         console.log("Angkot No. " + noAngkot + " sedang lembur");
//     }else {
//         console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
//     }
// }


var jumlahAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = 0; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log("Angkot No. " + noAngkot + " sedang beroperasi.");
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
    }
}