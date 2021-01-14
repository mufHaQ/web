// Bermain Dengan Warna

// const body = document.getElementsByTagName('body')[0];
const body = document.body;
const judul = document.getElementsByTagName('h1')[0];
const btnChangeColor = document.getElementById('btnChangeColor');

const btnRandomColor = document.createElement('button');
const txtBtnColor = document.createTextNode('random');
btnRandomColor.appendChild(txtBtnColor);
btnRandomColor.setAttribute('type', 'button');

btnChangeColor.after(btnRandomColor);



btnChangeColor.addEventListener('click', function () {
    body.classList.toggle('dark');
});

btnRandomColor.addEventListener('click', function () {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    // let g = Math.round(Math.random() * 255);
    // let b = Math.round(Math.random() * 255);
    console.log(r, g, b);
    body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    if (r >= 127 || g >= 127 || b >= 127) {
        body.style.color = 'black';
    } else {
        body.style.color = 'white';
    }
});


// versi 1
let sChange = document.getElementsByTagName('input');
for (let i = 0; i < sChange.length; i++) {
    sChange[i].addEventListener('input', function () {
        let r = sChange[0].value;
        let g = sChange[1].value;
        let b = sChange[2].value;
        console.log('warna: ' + r + '-' + g + '-' + b);
        body.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
}

// versi 2
// const warna = document.querySelectorAll("input[type='range']");
// warna.forEach(function (slider) {
//     slider.addEventListener("input", function () {
//         const r = document.querySelector("input[name='sMerah']").value;
//         const g = document.querySelector("input[name='sHijau']").value;
//         const b = document.querySelector("input[name='sBiru']").value;
//         console.log(r, g, b);
        // document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
//     })
// })




// dengan mouse
const pos = document.getElementsByTagName('span')[0];
body.addEventListener('mousemove', function(e){
    // posisi mouse
    // let x = e.clientX, y = e.clientY;
    // console.log(x + ' ' + y);
    // pos.innerHTML = `<span>${x} + ${y}</span>`;
    // ukuran browser
    // console.log(window.innerWidth, window.innerHeight);

    const xPos = Math.round((e.clientX / window.innerWidth) * 255),
        yPos = Math.round((e.clientY / window.innerHeight) * 255);
    console.log(xPos, yPos);

    body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 0)`;
});