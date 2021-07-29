/*Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/
/*
var arreyJ = [];
var arreyk = [];
var isIncluded = false;
var score = 0;
var mina = 16;
var max;
var mode = prompt("Inserisci la difficoltà tra difficile ,media", "difficile");

while (!mode || mode.trim() === "") {
  mode = prompt("Inserisci la difficoltà", "difficile");
}

switch (mode.toLowerCase()) {
  case "difficile":
    max = 50;
    break;
  case "media":
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
  var choiceNumber = parseInt(prompt("Inserisci un numero tra 1 e " + max));
  while (!choiceNumber || isNaN(choiceNumber)) {
    choiceNumber = parseInt(prompt("Inserisci un numero tra 1 e " + max));
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
*/
/*
minavar arreyJ = [];
var arreyk = [];
var isIncluded = false;
var score = 0;
var  = 16;
var max;*/

var startBtn = document.getElementById("start");
var arreyJ = [];
var arreyk = [];
var userNumber;
var bombNumber = 16;
var totalNumber = 0;
var attempts;
var foundNumber = false;
var score = 0;

startBtn.addEventListener("click", function () {
  var difficulty = document.getElementById("difficolta").value;

  switch (difficulty) {
    case "normal":
      totalNumber = 80;
      attempts = totalNumber - bombNumber;
      break;

    case "hard":
      totalNumber = 50;
      attempts = totalNumber - bombNumber;
      break;

    default:
      totalNumber = 100;
      attempts = totalNumber - bombNumber;
  }
  document.getElementById("field").innerHTML = "";
  console.log(arreyk);
  arreyk = [];
  createGrid(totalNumber);

  while (arreyJ.length < bombNumber) {
    var randomNumber = randomNumberGenerator(1, totalNumber);
    var findNumber = findInArray(arreyJ, randomNumber);
    if (findNumber == false) {
      arreyJ.push(randomNumber);
    }
  }

  console.log("Numeri Bomba: " + arreyJ);
  document.getElementById("field").addEventListener("click", function (e) {
    console.log(e.target.dataset.cell);
    let element = document.querySelectorAll(
      "[data-cell='" + e.target.dataset.cell + "']"
    );

    if (arreyJ.includes(parseInt(e.target.dataset.cell))) {
      element[0].classList.add("red");
      alert("Boom! mi dispiace");
      alert("Punteggio totale: " + score);
      location.reload();
    } else if (arreyk.indexOf(e.target.dataset.cell) == -1) {
      element[0].classList.add("green");
      arreyk.push(e.target.dataset.cell);
      score++;
    }
  });
});

function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}

function wrongNumber() {
  while (correctNumberCheck(1, totalNumber, userNumber) == false) {
    userNumber = parseInt(prompt("inserisci un numero"));
    console.log(userNumber);
  }
}

function correctNumberCheck(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result;
}

function createGrid(cells) {
  for (let i = 1; i <= cells; i++) {
    let cell = `
        <div data-cell="${i}" class="cell">${i}</div>
        `;
    let cellTemplate = document.createElement("DIV");
    cellTemplate.classList.add("square");
    cellTemplate.innerHTML = cell;
    document.getElementById("field").appendChild(cellTemplate);
  }
}
