// // Inline HTML
// const judul = document.getElementById('judul');
// function clickUbah() {
//     let bgColor = prompt("Masukkan warna background");
//     let color = prompt("Masukkan warna text");
//     judul.style.backgroundColor = bgColor;
//     judul.style.color = color;
//     if (bgColor == "def") {
//         judul.style.backgroundColor = 'white';
//     }

//     if (color == "def"){
//         judul.style.color = 'black';
//     }
// }


// // method
// const p1 = document.querySelector('.p1');
// function ubahWarna() {
//     let bgColor = prompt("Masukkan warna background");
//     let color = prompt("Masukkan warna text");
//     p1.style.backgroundColor = bgColor;
//     p1.style.color = color;
//     if (bgColor == "def") {
//         p1.style.backgroundColor = 'white';
//     }
//     if (color == "def"){
//         p1.style.color = 'black';
//     }
// }
// p1.onclick = ubahWarna;


// // addEventListener()
// const sectionB = document.getElementsByTagName('section')[1];
// const p4 = document.getElementsByTagName('p')[3];
// const newH2 = document.createElement('h2');
// const txtH2 = document.createTextNode('Tambah List');
// newH2.appendChild(txtH2);
// sectionB.replaceChild(newH2, p4);

// newH2.addEventListener('click', function(){
//     let txt = prompt('Masukkan nama untuk li baru: ');
//     const ul = document.querySelector('section#b ul');
//     const li = document.createElement('li');
//     const liTxt = document.createTextNode(txt);

//     li.appendChild(liTxt);
//     ul.appendChild(li);
// });






// Perbedaan

const p3 = document.querySelector('.p3');

// Event Handler
// p3.onclick = function(){
//     p3.style.backgroundColor = 'green';
// }
// // Event yang pertama akan ditimpa dan tidak di jalankan
// p3.onclick = function(){
//     p3.style.color = 'salmon';
// }

// Event listener
p3.addEventListener('dblclick', function () {
    p3.style.backgroundColor = 'green';

});
p3.addEventListener('dblclick', function () {
    p3.style.color = 'salmon';
});



// daftar lengkap: https://developer.mozilla.org/en-US/docs/Web/Events