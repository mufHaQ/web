// DOM Selection

// get element by id
// function btn1(){
//     const judul = document.getElementById('judul');
//     judul.style.color = 'white';
//     judul.style.backgroundColor = 'black';
// }

// function btn2(){
//     const judul = document.getElementById('judul');
//     judul.style.color = 'black';
//     judul.style.backgroundColor = 'white';
// }

// get element by tag name
function btn1() {
    const judul = document.getElementById('judul');
    judul.style.color = 'white';
    judul.style.backgroundColor = 'black';
    const p = document.getElementsByTagName('p');
    for (let i = 0; i < 3; i++) {
        p[i].style.backgroundColor = 'black';
        p[i].style.backgroundColor = 'white';
    }
}

function btn2() {
    const judul = document.getElementById('judul');
    judul.style.color = 'black';
    judul.style.backgroundColor = 'white';
    const p = document.getElementsByTagName('p');
    for (let i = 0; i < 3; i++) {
        p[i].style.backgroundColor = 'white';
        p[i].style.color = 'black';
    }
}