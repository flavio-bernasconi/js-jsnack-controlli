// array vuoto
// chiedi 6 numeri
// se dispari pushalo nell-array

var array = [];
for (var i = 1; i <= 6; i++) {

  var ask = parseInt(prompt('numero' + i));
  // // ask trasforma in numero la stringa cosasei
  // var ask = parseInt(cosaSei);
  // if (cosaSei == "") {
  //   console.log('non ha scritto il numero' + i);
  //   i--;
  // }
  // console.log(typeof ask);
  // // if (ask.typeOf != string) {
  // //   console.log('non va bene');;
  // // }
  if (ask % 2 !=0) {
    array.push(ask);
    console.log(array);
  }

}



//
