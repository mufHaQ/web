// Menjumlahkan volume 2 kubus
// Di refactor

function totalVk(sisiA, sisiB) {
    return (sisiA*sisiA*sisiA) + (sisiB*sisiB*sisiB);
}

var ulang = true;
while (ulang == true) {
    var kubusA = parseInt(prompt('Masukkan Sisi kubus B')), kubusB = parseInt(prompt('Masukkan sisi kubus B'));
    var hasil = totalVk(kubusA, kubusB);

    console.log("Jumlah seluruh volume antara 2 kubus: " + hasil);
    alert("Jumlah seluruh volume antara 2 kubus: " + hasil);
    ulang = confirm("Apakah anda ingin mengulangi lagi?")
}