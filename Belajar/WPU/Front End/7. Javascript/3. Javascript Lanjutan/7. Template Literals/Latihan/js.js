// Latihan Template Literals

// 1. HTML Fragments
// const siswa = {
//     nama: 'Dliyaulhaq Mufliansyah',
//     umur: 16,
//     nis: 3733,
//     email: 'masbrowmess33@gmail.com'
// };
// const el = `<div class="siswa">
//     <h1>${siswa.nama}</h1>
//     <h3 class="nis">${siswa.nis}</h3>
// </div>`;

// 2. Looping
// const siswa = [{
//         nama: 'Siswa 1',
//         email: 'siswa1@smkrus.sch.id'
//     },
//     {
//         nama: 'Siswa 2',
//         email: 'siswa2@smkrus.sch.id'
//     },
//     {
//         nama: 'Siswa 3',
//         email: 'siswa3@smkrus.sch.id'
//     },
//     {
//         nama: 'Siswa 4',
//         email: 'siswa4@smkrus.sch.id'
//     },
//     {
//         nama: 'Siswa 5',
//         email: 'siswa5@smkrus.sch.id'
//     },
//     {
//         nama: 'Siswa 6',
//         email: 'siswa6@smkrus.sch.id'
//     },
//     {
//         nama: 'Siswa 7',
//         email: 'siswa7@smkrus.sch.id'
//     },
//     {
//         nama: 'Siswa 8',
//         email: 'siswa8@smkrus.sch.id'
//     },
// ];
// const el = `<div class="siswa">
//     ${siswa.map(i => `<ul>
//         <li>${i.nama}</li>
//         <li>${i.email}</li>
//     </ul>`).join('')}
// </div>`

// 3. Pengkondisian
// const lagu = {
//     artist: 'Ansambel Alexandrov',
//     judul: 'The Red Army is The Strongest'
// };
// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.artist} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//         <li>${lagu.judul}</li>
//     </ul>
// </div>`

// 4. Nested
// HTML Bersarang
const siswa = {
    nama: 'Siswa 1',
    semester: 2,
    mataPelajaran: [
        'Rekayasa Perangkat Lunak',
        'Pemodelan Perangkat Lunak',
        'Pemrogramman Game',
        'Pemrogramman berbasis Sistem Orientasi Object'
    ]
}

function cetakMP(mataPelajaran) {
    return `
        <ol>
            ${mataPelajaran.map(mp => `<li>${mp}</li>`).join('')}
        </ol>
    `;
}
const el = `<div class="siswa">
    <h2>${siswa.nama}</h2>
    <span class="semester">Semester: ${siswa.semester}</span>
    <h4>Mata Pelajaran: </h4>
    ${cetakMP(siswa.mataPelajaran)}
</div>`







document.body.innerHTML = el;