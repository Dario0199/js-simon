// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const container = document.querySelector('.container-number')
const number = document.querySelector('.number')

genRandNumb(1, 100);


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
//generazione prompt
let time = 5;
const finalNumb = []

setTimeout(() => {
    number.classList.add('d-none')
    for(let i = 0; i < 5; i++){
    
        insertNum = parseInt( prompt('inserisci uno per volta i numeri ') );
        
        if(insertNum >100 || insertNum < 1 || isNaN(insertNum)){
            alert('inserisci un valore da 1 a 100')
            
            insertNum = parseInt( prompt('inserisci uno per volta i numeri ') );
        } 
        console.log('numeri inseriti',insertNum);  
        finalNumb.push(insertNum); 
    }
    console.log('numeri finali', finalNumb);
    
    
}, time * 1000)

