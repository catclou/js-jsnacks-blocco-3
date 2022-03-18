// SNACK2: Fai inserire un numero, che chiameremo N, all’utente. 
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.

// 1) Chiedi all'utente di inserire un numero tramite prompt
let numeroInserito = prompt("Inserisci un numero (in cifre)")
console.log(numeroInserito);

// 2) Genera un numero di array uguali al numero indicato dall'utente
//    che al loro interno avranno 10 numeri casuali da 1 a 100
i=0;
while (i < numeroInserito) {
    
    let mettoQui = [];
    
    for (x = 0; x < 10; x++) {
        mettoQui.push(Math.floor(Math.random() * 100 + 1))
        console.log(mettoQui)
    }

    i++

    // 3) Ogni array viene stampato
    document.getElementById("lista").innerHTML += `<li>${mettoQui}</li>`;
}


