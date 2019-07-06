var cognomi = [
  'sassi',
  'rossi',
  'pagani',
  'campi',
  'turconi',
  'comin'
];



var invitato = prompt('cognome?');
document.getElementById('cognome').innerHTML = invitato;


if (invitato === "") {
    console.log('non hai scritto niente');
}
//doppia negazione inviato non è numero = a falso allor
//è un numero.
//
 else if (isNaN(invitato) == false){
  console.log(invitato);
  console.log('è un numero');
}
//per essere piu chiaro potrei eliminare queste 3 righe
// ma risulta piu comprensibile a me
else if (isNaN(invitato) == true){
 console.log(invitato);
 console.log('è una parola');
}


for (var i = 0; i < cognomi.length; i++) {
 console.log(cognomi[i]);

 if (invitato == cognomi[i]) {
   console.log('ok è sulla lista, buona serata');
   document.getElementById('lista').innerHTML = 'Si';
   break;
 }
 else {
   console.log('mi spiace non è sulla lista');
   document.getElementById('lista').innerHTML = 'No';
 }
}





//
