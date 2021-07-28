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
var mina = 16;
var max;
var mode = prompt("Inserisci la difficoltà !", "difficile");

while (!mode || mode.trim() === "") {
  mode = prompt("Inserisci la difficoltà !", "difficile");
}

switch (mode.toLowerCase()) {
  case "difficile":
    max = 50;
    break;
  case "mediao":
    max = 80;
    break;
  case "facile":
    max = 100;
    break;
  default:
    max = 80;
    break;
}

console.log(max);

while (arreyJ.length < mina) {
  var mine = randomNumber(max, 1);
  if (!arreyJ.includes(mine)) {
    arreyJ.push(mine);
  }
}
console.log(arreyJ);
console.log(arreyk);

while (arreyk.length < max - mina && isIncluded === false) {
  var choiceNumber = parseInt(prompt("Inserisci un numero"));
  while (!choiceNumber || isNaN(choiceNumber)) {
    choiceNumber = parseInt(prompt("Inserisci un numero"));
  }
  var totalScore = max - mina;
  if (!arreyk.includes(choiceNumber)) {
    arreyk.push(choiceNumber);
    console.log(arreyk);
  } else {
    alert("Il numero è già stato inserito!");
  }
  if (arreyJ.includes(choiceNumber)) {
    isIncluded = true;
    alert("Hai perso! Il tuo punteggio è " + score + " su " + totalScore);
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
