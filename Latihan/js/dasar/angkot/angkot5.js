// Angkot 5

let jumlahAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log('Angkot No.' + noAngkot + ' Beroperasi dengan baik.');
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log('Angkot No.' + noAngkot + ' Sedang Lembur.');
  } else {
    console.log('Angkot No.' + noAngkot + ' Sedang tidak beroperasi.');
  }
}