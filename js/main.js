/*Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/
var arreyJ = [];
var arreyk = [];
var isIncluded = false;
var score = 0;

while (arreyJ.length < 16) {
  var mine = randomNumber(100, 1);
  if (!arreyJ.includes(mine)) {
    arreyJ.push(mine);
  }
}
console.log(arreyJ);
console.log(arreyk);

while (arreyk.length < 84 && isIncluded === false) {
  var choiceNumber = parseInt(prompt("Inserisci un numero tra 1 e 100"));
  if (!arreyk.includes(choiceNumber)) {
    arreyk.push(choiceNumber);
    console.log(arreyk);
  } else {
    alert("Il numero è già stato inserito!");
  }
  if (arreyJ.includes(choiceNumber)) {
    isIncluded = true;
    alert("Hai perso!" + "Il tuo punteggio è " + score);
  } else {
    score++;
  }
}
console.log(arreyk);

function isinArray(element, array) {
  for (var i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return true;
    } else {
      return false;
    }
  }
}
function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}
