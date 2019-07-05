// array vuoto
// chiedi 6 numeri
// se dispari pushalo nell-array

var array = [];
for (var i = 1; i <= 6; i++) {
  var ask = parseInt(prompt('numero' + i));
  if (ask % 2 !=0) {
    array.push(ask);
    console.log(array);
  }

}



//
