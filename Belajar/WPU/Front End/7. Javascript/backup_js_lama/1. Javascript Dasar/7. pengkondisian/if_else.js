// Pengkondisian IF ELSE

var noAngkot;

var jumlahAngkot = prompt("Jumlah angkot: ");
var angkotBeroperasi = prompt("Jumlah angkot yang beroperasi: ");


for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " sedang beroperasi.");
    }else{
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
    }
}