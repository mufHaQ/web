// alert('Hallo');
// alert('nama saya');
// alert('Dliyaulhaq Mufliansyah');
// alert('umur saya');
// alert('16 tahun');


// var nama = prompt("Masukkan nama anda: ");
// alert("Nama anda adalah: " + nama);


// var konfirmasi = confirm("Kamu yakin?");
// if (konfirmasi === true){
//     alert("User menekan tombol OK");
// }else {
//     alert("User menekan tombol CANCEL");
// }




alert("Selamat datang");

var ulang = true;

while (ulang) {
    var nama = prompt("Masukkan nama anda: ");
    alert("Halo " + nama);
    ulang = confirm("Apakah anda ingin mengulangi lagi?");
    if (ulang){
        continue;
    }else {
        alert("Terima Kasih");
    }

}


// var day;
// switch (new Date().getDay()){
//     case 0:
//         day = "Minggu";
//     break;
//     case 1:
//         day = "Senin";
//     break;
//     case 2:
//         day = "Selasa";
//     break;
//     case 3:
//         day = "Rabu";
//     break;
//     case 4:
//         day = "Kamis";
//     break;
//     case 5:
//         day = "Jum'at";
//     break;
//     case 6:
//         day = "Sabtu";
// }

// alert("Hari ini adalah hari " + day);