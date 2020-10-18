'use strict';

const inputNum = document.querySelector('.js-inputNum');
const button = document.querySelector('.js-btn');
const resetButton = document.querySelector('.js-reset');
const clue = document.querySelector('.js-clue');
const tries = document.querySelector('.js-tries');
let numTries = 0;
let numRandom = parseInt(getRandomNumber(100));

const guessNumber = function () {
  cluesNumber();
  renderNumberOfTries();
  inputNum.value = '';
};

button.addEventListener('click', guessNumber);

//Make the input work when hitting enter key.
const enterKey = function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    e.preventDefault();
    button.click();
  }
};
inputNum.addEventListener('keydown', enterKey);

//Generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(numRandom);

//Get hints/clues
const cluesNumber = function () {
  const numValue = parseInt(inputNum.value);
  console.log(numValue);
  if (numValue < 1 || numValue > 100) {
    clue.innerHTML = 'El numero debe estar entre 1 y 100';
  } else if (isNaN(numValue)) {
    // } else if (inputNum.value === '') {
    clue.innerHTML = 'Tienes que escribir un numero';
  } else if (numValue > numRandom) {
    clue.innerHTML = 'Demasiado alto';
  } else if (numValue < numRandom) {
    clue.innerHTML = 'Demasiado bajo';
  } else if (numValue === numRandom) {
    clue.innerHTML = 'Has ganado campeona!!!';
  }
};

//Tries function
const renderNumberOfTries = function () {
  numTries++;
  tries.innerHTML = numTries;
};

//reset button
//cleans inputs, counter
// writes the initial feedback
//generates a new random number
const reset = function () {
  inputNum.value = '';
  clue.innerHTML = 'Pista: Escribe el numero y dale a Prueba';
  numTries = 0;
  tries.innerHTML = numTries;
  numRandom = parseInt(getRandomNumber(100));
  console.log(numRandom);
};

resetButton.addEventListener('click', reset);
