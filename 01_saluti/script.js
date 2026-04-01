/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

/* function saluti(stringa){
    return "ciao " + stringa;
} */

let saluti = (stringa) => "ciao " + stringa;
// Invoca la funzione qui e stampa il risultato in console
let risultato = saluti(userName);
console.log(risultato);


//Risultato atteso se si passa 'Mario': // ciao Mario
