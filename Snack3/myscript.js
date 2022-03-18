// SNACK 3: Il software deve chiedere per 5 volte all’utente di inserire 
// un numero. Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;

let i = 0;
while (i<5) {

    let numero = parseInt(prompt("Inserisci un numero (in cifre)"));

    if (isNaN(numero)) {
        numero = 0;
    }

    console.log(numero);
    somma += numero;

    i++;
}

console.log(somma);
document.getElementById("somma").innerHTML = `La somma dei numeri da te inseriti è ${somma}`;