// Menjumlahkan volume 2 kubus

function totalVk(sisiA, sisiB) {
    var volumeA = sisiA * sisiA * sisiA;
    var volumeB = sisiB * sisiB * sisiB;

    var total = volumeA + volumeB;

    return total;
}

var ulang = true;
while (ulang == true) {
    var kubusA = parseInt(prompt('Masukkan Sisi kubus B'));
    var kubusB = parseInt(prompt('Masukkan sisi kubus B'));
    var hasil = totalVk(kubusA, kubusB);

    console.log("Jumlah seluruh volume antara 2 kubus: " + hasil);
    alert("Jumlah seluruh volume antara 2 kubus: " + hasil);
    ulang = confirm("Apakah anda ingin mengulangi lagi?")
}