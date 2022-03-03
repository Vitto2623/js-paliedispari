// chiedo di inserire una parola e verifico se è palindroma
const parolaUtente = prompt("Inserisci una parola");
//let parolaDivisa = parolaUtente.split('');
//parolaDivisa = parolaDivisa.reverse();
//let parolaInvertita = parolaDivisa.join('');

let verifica = verificoParolaPalindroma(parolaUtente);
let outPutParola = document.getElementById("output");
if (verifica == "si"){
    outPutParola.innerHTML += " La parola è palindroma."
}else {
    outPutParola.innerHTML += " La parola non è palindroma.";
}

//verifica parola palindroma (restituisce "si" oppure "no")
function verificoParolaPalindroma(parola){
    let parolaDivisa = parola.split('');
    parolaDivisa = parolaDivisa.reverse('');
    let parolaInvertita = parolaDivisa.join('');
    let risultatoPalindroma;
    if (parola == parolaInvertita){
        risultatoPalindroma = "si";
    }else {
        risultatoPalindroma = "no";
    }
    console.log(parola);
    return risultatoPalindroma;
}

// Inizio pari e dispari
const inputPariDispari = document.getElementById("input-select");
const inputNumber = document.getElementById("input-number");
const outPutNumeroPc = document.getElementById("number-pc");
const outPutFinale = document.getElementById("risultato-finale");
document.getElementById("number-pc").style.color = "red";
document.getElementById("risultato-finale").style.fontSize = "50px";
document.getElementById("risultato-finale").style.color = "green";

// aggiungo evento al bottone
const button = document.getElementById("my-button");
button.addEventListener('click', function(){
    let numeroPlayer = parseInt(inputNumber.value);
    if ((numeroPlayer > 0) && (numeroPlayer < 6)){
        let numeroPc = randomNumber(1, 5);
        let sommatoria = sommaNumeri(numeroPlayer, numeroPc);
        outPutNumeroPc.innerHTML = numeroPc;
        //dichiarazione vincitore
        if ((sommatoria %2 == 0) && (inputPariDispari.value == "pari")){
            outPutFinale.innerHTML = "Hai vinto";
        }else if ((sommatoria %2 != 0) && (inputPariDispari.value == "dispari")){
            outPutFinale.innerHTML = "Hai vinto";
        }else{
            outPutFinale.innerHTML = "Hai perso";
        }
    }else{
        outPutFinale.innerHTML = "Numero inserito errato";
    }
});

// la funzione restituisce un numero random fra un valore minimo e uno massimo
function randomNumber(minimumValue, maximumValue){
    //outPutNumeroPc.innerHTML += Math.floor(Math.random()*((maximumValue + 1) - minimumValue) + minimumValue);
    let valorePc = Math.floor(Math.random()*((maximumValue + 1) - minimumValue) + minimumValue);
    return valorePc;
}

// la funzione restituisce la somma di due numeri
function sommaNumeri(val1, val2){
    let somma = val1 + val2;
    return somma;
}


