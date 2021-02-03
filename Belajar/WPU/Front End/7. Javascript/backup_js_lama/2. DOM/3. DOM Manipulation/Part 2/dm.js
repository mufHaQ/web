// appendChild: untuh bagian terakhir


// Buat elemen baru
const pBaru = document.createElement('p');
const txtPBaru = document.createTextNode('Paragraf 4');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(txtPBaru);

// Simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);




const li = document.createElement('li');
const txtPBaru2 = document.createTextNode('item baru');
li.appendChild(txtPBaru2);
const ul = document.querySelector('section#b ul');
const li2 = ul.getElementsByTagName('li')[1];
// const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(li, li2);




// Remove child
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);




// Replace child
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const txtH2 = document.createTextNode('Judul Baru');
h2Baru.appendChild(txtH2);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'blue', pBaru.style.color = 'white';
li.style.backgroundColor = 'blue', li.style.color = 'white';
h2Baru.style.backgroundColor = 'blue', h2Baru.style.color = 'white';