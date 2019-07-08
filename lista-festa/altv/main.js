var cognomi = [
  'sassi',
  'rossi',
  'pagani',
  'campi',
  'turconi',
  'comin'
];

var invitato = prompt('cognome?');

if (invitato === "") {
    console.log('non hai scritto niente');
    while (invitato === "") {
      var invitato = prompt('scrivi qualcosa');
    }
}
//doppia negazione invitato = un numero.
 else if (isNaN(invitato) == false){
  console.log(invitato);
  console.log('è un numero');
  while (isNaN(invitato) == false) {
    var invitato = prompt('scrivi un cognome non un numero');
  }
}

for (var i = 0; i < cognomi.length; i++) {
 console.log(cognomi[i]);
 if (invitato == cognomi[i]) {
   document.getElementById('cognome').innerHTML = invitato;
   document.getElementById('lista').innerHTML = 'Si';
   break;
 }
 else {
   document.getElementById('cognome').innerHTML = invitato;
   document.getElementById('lista').innerHTML = 'No';

 }
}





//
