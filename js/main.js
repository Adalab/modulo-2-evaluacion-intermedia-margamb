'use strict';

const inputNum = document.querySelector('.js-inputNum');
const button = document.querySelector('.js-btn');
const clue = document.querySelector('.js-clue');
const tries = document.querySelector('.js-tries');
let numTries = 0;
const numRandom = parseInt(getRandomNumber(100));

const guessNumber = function () {
  cluesNumber();
  renderNumberOfTries();
};

button.addEventListener('click', guessNumber);

//Generate rundom number
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
