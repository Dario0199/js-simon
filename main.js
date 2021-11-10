// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const container = document.querySelector('.container-number')
const number = document.querySelector('.number')

genRandNumb(1, 100);
const array = []
//generazione 5 numeri random

function genRandNumb(min, max){
    const array = []
    console.log(array);
    let numbRand
    for(let i = 0; i < 5; i++){
        numbRand = Math.floor( Math.random() * (max - min + 1) )+ min;
        console.log(numbRand);
        array.push(numbRand)
        number.innerText = array
    }
    
};

let time = 5;
let insertNum
setTimeout(() => {
    number.classList.add('d-none')
    for(let i = 0; i < 5; i++){
    
        insertNum = parseInt( prompt('inserisci uno per volta i numeri ') );
        console.log('numeri prompt',insertNum);
    }
}, time * 1000)

