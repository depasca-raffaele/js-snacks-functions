/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function getVocali(stringa) {
    let counter = 0;
    stringa.toLowerCase();
    for (let i = 0; i < stringa.length; i++) {
        if (stringa.charAt(i) === "a" || stringa.charAt(i) === "e" || stringa.charAt(i) === "i" || stringa.charAt(i) === "o" || stringa.charAt(i) === "u") {
            counter++;
        }
    }
    return counter;
}
const getVocaliArrow = (stringa) => {
     let counter = 0;
    stringa.toLowerCase();
    for (let i = 0; i < stringa.length; i++) {
        if (stringa.charAt(i) === "a" || stringa.charAt(i) === "e" || stringa.charAt(i) === "i" || stringa.charAt(i) === "o" || stringa.charAt(i) === "u") {
            counter++;
        }
    }
    return counter;
}
// Invoca la funzione qui e stampa il risultato in console
let risultato = getVocaliArrow(word);
console.log(risultato);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)