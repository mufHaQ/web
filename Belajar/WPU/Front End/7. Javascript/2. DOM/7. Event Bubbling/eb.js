// Event listener
// let card = document.getElementsByClassName('card')[0];
// const closeX = document.getElementsByClassName('close')[0];

// closeX.addEventListener('click', function(){
//     card.remove();
// });




// Dom Traversal
// const clsBtn = document.querySelectorAll('.close');
// const carD = document.querySelectorAll('.card');

// for (let i = 0; i < clsBtn.length; i++) {
//     clsBtn[i].addEventListener('click', function (e) {
//         // clsBtn[i].parentElement.style.display = 'none';

//         e.target.parentElement.style.display = 'none';
//     });
// }


// clsBtn.forEach(function (i) {
//     i.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopImmediatePropagation();
//     });
// });


// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling);

// const cards = document.querySelectorAll('.card');
// carD.forEach(function(card){
//     card.addEventListener('click', function(){
//         alert('ok');
//     });
// });








const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});