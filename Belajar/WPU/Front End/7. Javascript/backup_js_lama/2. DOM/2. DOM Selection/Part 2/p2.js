// Hanya salah satu, jika dipilih semua, maka yang akan diubah yang berada ada urutan pertama
const p4 = document.querySelector('#b p');
p4.style.color = 'white';
p4.style.fontWeight = 'bold';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'salmon';


const p = document.querySelectorAll('p');
for (let i = 0; i < 3; i++) {
    p[i].style.backgroundColor = 'lightgreen';
}


// Mengubah Node Root
const sectionB = document.querySelector('section#b');
const pGraf = sectionB.getElementsByTagName('p')[0];
pGraf.style.backgroundColor = 'orange';