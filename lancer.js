'use strict';

// Selecting HTML elements using the DOM
const p1Score = document.getElementById('score--0');
const p2Score = document.getElementById('score--1');
const p1Current = document.getElementById('current--0');
const p2Current = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Game Starting Conditions
p1Score.textContent = 0;
p2Score.textContent = 0;
// Hiding the dice at the start of the game.
diceImg.classList.add('hidden');

let currentScore = 0;

// ROLLING THE DICE
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceImg.classList.remove('hidden');
  diceImg.src = `imgs/dice-${dice}.png`;

  // 3. Check for rolled 1. switch to next player.
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    p1Current.textContent = currentScore; // CHANGE LATER 
  } else {
    // switch to next player.
  }
});
