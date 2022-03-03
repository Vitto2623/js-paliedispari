// chiedo di inserire una parola e verifico se è palindroma
const parolaUtente = prompt("Inserisci una parola");
let parolaDivisa = parolaUtente.split('');
parolaDivisa = parolaDivisa.reverse();
let parolaInvertita = parolaDivisa.join('');

let outPutParola = document.getElementById("output");


verificoParolaUtente(parolaInvertita);

function verificoParolaUtente(parola){
    if (parolaUtente == parolaInvertita){
        outPutParola.innerHTML += " La parola è palindroma.";
    }else {
        outPutParola.innerHTML += " La parola non è palindroma.";
    }
    console.log(parola);
}

// Inizio pari e dispari
const inputPariDispari = document.getElementById("input-select");
const inputNumber = document.getElementById("input-number");
const outPutNumeroPc = document.getElementById("number-pc");
const outPutFinale = document.getElementById("risultato-finale");
document.getElementById("number-pc").style.color = "red";

// creo una funzione che genera un numero random da 1 a 5 per il pc
function randomNumber(minimumValue, maximumValue){
    //outPutNumeroPc.innerHTML += Math.floor(Math.random()*((maximumValue + 1) - minimumValue) + minimumValue);
    let valorePc = Math.floor(Math.random()*((maximumValue + 1) - minimumValue) + minimumValue);
    return valorePc;
}

// somma i due numeri
function sommaNumeri(val1, val2){
    let somma = val1 + val2;
    return somma;
}

// aggiungo evento al bottone
const button = document.getElementById("my-button");
button.addEventListener('click', function(){
    let numeroPc = randomNumber(1, 5);
    let sommatoria;
    let nPlayer = inputNumber.value;
    console.log(numeroPc);
    console.log(nPlayer);
    sommatoria = sommaNumeri(nPlayer, numeroPc);
    console.log(sommatoria);
    outPutFinale.innerHTML = sommaNumeri;

    /*
    if ((sommaNumeri %2 == 0) && (inputPariDispari.value == "pari")){
        outPutFinale.innerHTML = "Hai vinto";
    }else if ((sommaNumeri %2 != 0) && (inputPariDispari.value == "dispari")){
        outPutFinale.innerHTML = "Hai vinto";
    }else{
        outPutFinale.innerHTML = "Hai perso";
    }
     */

});





