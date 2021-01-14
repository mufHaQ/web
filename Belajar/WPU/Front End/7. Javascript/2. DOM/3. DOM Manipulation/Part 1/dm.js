// Manipulasi Elemen

const judul = document.getElementById('judul');
const secA = document.querySelector('section#a');
const judul2 = document.getElementsByTagName('h1')[0];
const parG = document.querySelectorAll('#a p');
const pColor = document.getElementsByClassName('red');
const btnToggle = document.getElementById('btn');

// innerHTML
// judul.innerHTML = 'Hello <i>Dliyaulhaq Mufliansyah</i>';
// secA.innerHTML = '<p>Hello World</p>';


// style
// judul.style.backgroundColor = 'black';
// judul.style.color = 'white';


// Attribute
judul2.setAttribute('name', 'nama');
for(let j = 0; j < parG.length; j++){
    parG[j].classList.add('paragraf');
    parG[j].style.fontWeight = 'bold';
    parG[j].innerHTML = 'Hello World ke-' + (j + 1);
    parG[j].setAttribute('id', 'p' + (j + 1));
}
function tgl() {
    for (let i = 0; i < parG.length; i++) {
        // parG[1].classList.remove('red');
        // parG[i].classList.toggle('red');
        parG[i].classList.toggle('dark');
        console.log(parG[i]);
    }
    judul.classList.toggle('dark');
    console.log(judul);
}