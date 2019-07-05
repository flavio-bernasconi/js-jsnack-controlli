// array vuoto
// chiedi 6 numeri
// se dispari pushalo nell-array

var array = [];
var valore = "";

for (var i = 1; i <= 6; i++) {
//chiedo valore ad utente
var inserito = prompt('inserisci un valore',valore);
// se il valore inserito = empty; come era gia all'inizio (vedi var valore)
// allora log scrive messaggio qui sotto
if (inserito === "") {
    console.log('non hai scritto niente');
}
//se il valore inserito non è un numero quindi isNaN
//allora scrivi messaggio qui sotto
 else if (isNaN(inserito)){
  console.log(inserito);
  console.log('isNan non so che fare');
}
//se inserito esiste ed è a questo punto verificato che è un numero
//se il resto di inserito / 2 != 0 inseriscilo nell-array;
//il resto di inserito / 2 == 0 scrivi che è pari.
else if (inserito) {
    if (inserito % 2 !=0) {
      array.push(inserito);
      console.log(array);
    }
    else if (inserito % 2 ==0){
      console.log(inserito + ' è pari');
    }
    else {
      console.log('');
    }
} else {
    console.log('come cosa hai scritto?!!!!??');
}
}


//
