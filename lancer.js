'use strict';

// Selecting HTML elements using the DOM
const p1 = document.querySelector('.player--0');
const p2 = document.querySelector('.player--1');
const p1Score = document.getElementById('score--0');
const p2Score = document.getElementById('score--1');
const p1Current = document.getElementById('current--0');
const p2Current = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Game Starting Conditions
let scores, currentScore, activePlayer, playing;

const initialize = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  p1Score.textContent = 0;
  p2Score.textContent = 0;
  p1Current.textContent = 0;
  p2Current.textContent = 0;
  diceImg.classList.add('hidden');

  p1.classList.remove('player--winner');
  p2.classList.remove('player--winner');
  p1.classList.add('player--active');
  p2.classList.remove('player--active');
};

initialize();

// Switching the players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  p1.classList.toggle('player--active');
  p2.classList.toggle('player--active');
};

// ROLLING THE DICE
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceImg.classList.remove('hidden');
    diceImg.src = `imgs/dice-${dice}.png`;

    // 3. Check for rolled 1. switch to next player.
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player.
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add Current score to the score of the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //3.  Check if score is at least 100, if so finish the game and if not switch to the next player
    if (scores[activePlayer] >= 30) {
      // finish the game
      playing = false;
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switching to the next player
      switchPlayer();
    }
  }
});

// MY SOLUTION TO THE CHALLENGE
// btnNew.addEventListener('click', function () {
//   p1Score.textContent = 0;
//   p2Score.textContent = 0;
//   p1Current.textContent = 0;
//   p2Current.textContent = 0;
//   playing = true;
//   if (playing) {
//     diceImg.classList.add('hidden');
//     document
//       .querySelector(`.player--${activePlayer}`)
//       .classList.remove('player--winner');

//     //   p1.classList.add('player--active');
//     if (p2.classList.contains('player--active')) {
//       p2.classList.remove('player--active');
//       p1.classList.add('player--active');
//       if (dice !== 1) {
//         // Add dice to current score
//         currentScore += dice;
//         document.getElementById(`current--0`).textContent =
//           currentScore;
//       }
//     }
//   }
// });

//JONAS' SOLUTION
btnNew.addEventListener('click', initialize);
