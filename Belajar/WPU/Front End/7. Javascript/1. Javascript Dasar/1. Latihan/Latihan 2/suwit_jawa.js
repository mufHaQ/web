// Suwit Jawa/suten/pingsut
var tanya = true;

while(tanya == true){
// Menangkap pilihan player
// var nama = prompt("Silahkan Masukkan nama player: ")
    var p = prompt('Silahkan pilih (tulisannya kecil semua): \ngajah, semut, atau orang');

    // Menangkap pilihan computer
    // Membangkitakan bilangan random
    var comp = Math.random();
    if (comp < 0.45) {
        comp = 'gajah';
    } else if (comp >= 0.45 && comp < 0.80) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    // console.log(comp);

    var hasil = '';

    // Menetukan rules
    if (p == comp) {
        hasil = 'Seri!';
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'Menang!' : 'Kalah!';
    } else if (p == 'orang'){
        hasil = (comp == 'gajah') ? 'Kalah!' : 'Menang!';
    } else if (p == 'semut'){
        hasil = (comp == 'gajah') ? 'Menang!' : 'Kalah!';
    } else {
        hasil = 'Player memasukkan hasil yang salah!!';
    }

    // Tampilkan hasil

    alert('Player memilih: ' + p + '\nKomputer memilih: ' + comp + '\nHasilnya ' + hasil);


    tanya = confirm('Apakah anda ingin mengulang lagi?')
}

alert('Terimakasih')