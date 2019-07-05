var cognomi = [
  'sassi',
  'rossi',
  'pagani',
  'campi',
  'turconi',
  'comin'
];

var invitato = prompt('Cognome? Prego');
document.getElementById('cognome').innerHTML = invitato;

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
