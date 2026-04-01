/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function getNomi(array, lettera){
    let nomi = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].charAt(0).toLowerCase() === lettera.toLowerCase()){
            nomi.push(array[i]);
        }
    }
    return nomi;
}
const getNomiArrow = (array, lettera) => {
    let nomi = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].charAt(0).toLowerCase() === lettera.toLowerCase()){
            nomi.push(array[i]);
        }
    }
    return nomi;
}
// Invoca la funzione qui e stampa il risultato in console

let risultato = getNomiArrow(names, 'a');
console.log(risultato);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]