// // Parameter dan Argument

// function tambah(a, b){
//     //   Parameter^
//     return a + b;
// }

// var a = parseInt(prompt('Masukkan nilai A: ')), b = parseInt(prompt('Masukkan nilai B:'));

// // var hasil = tambah(100, 200);
// //                Argument^
// console.log(tambah(a, b));
// //           Argument^





// Arguments
// function tampung(){
//     return arguments;
// }

// var tmp = tampung(5, 10, 20, 'Hi', false, true);
// console.log(tmp);


function tambah(){
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

var hasil = tambah(10, 20, 30);
console.log(hasil);