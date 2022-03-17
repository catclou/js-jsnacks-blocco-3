// SNACK 1: Crea un array vuoto e chiedi all'utente un numero 
// da inserire nell'array. Continua a chiedere i numeri all'utente
// e a inserirli nell'array fino a quando la somma degli elementi
// è minore di 50.

// 1) Crea un array vuoto
let daRiempire = [];
let somma = 0;
let richiestaNumero;

// 4) La somma degli elementi è minore di 50?
    // a) se no, continua a chiedere numeri
    // b) se sì, fermati

let i=1;
while ( Number(somma) < 50 ) {
    // 2) Chiedi all'utente un numero da inserire nell'array
    richiestaNumero = parseInt( prompt("Inserisci un numero in cifre, per favore (l'educazione prima di tutto)") );

    if (isNaN(richiestaNumero)) {
        richiestaNumero = 0;
    }

    // 3) Fai la somma degli elementi
    somma = parseInt(somma += richiestaNumero);

    i++;
}

daRiempire.push(somma);
console.log(daRiempire);
