function getPilihanComp(){
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if (player == comp) return 'SERI!'; 
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
}


function putar(){
    const img = ["gajah", "orang", "semut"];
    const imgComp = document.querySelector(".img-comp");
    const waktuAwal = new Date().getTime();

    let i = 0;

    setInterval(function () {
        if (new Date().getTime() - waktuAwal > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute("src", "img/" + img[i++] + ".png");
        if (i == img.length) i = 0;
    }, 100);

}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(i){
    i.addEventListener('click', function(){
        const pilihanComputer = getPilihanComp();
        const pilihanPlayer = i.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function(){
            const imgComp = document.querySelector('.img-comp');
            imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
            console.log(hasil);
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000)

    });
});









// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
    // const pilihanComputer = getPilihanComp();
    // const pilihanPlayer = pGajah.className;
    // const hasil = getHasil(pilihanComputer, pilihanPlayer);

    // const imgComp = document.querySelector('.img-comp');
    // imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');
    // console.log(hasil);
    
    // const info = document.querySelector('.info');
    // info.innerHTML = hasil;
// });