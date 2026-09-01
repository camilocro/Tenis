import TennisGame from './tennis.js';

const game = new TennisGame();
const scoreDisplay = document.querySelector('#score-display');
const btnP1 = document.querySelector('#btn-p1');
const btnP2 = document.querySelector('#btn-p2');
const btnReset = document.querySelector('#btn-reset');

const updateScore = () => {
  const currentScore = game.getScore();
  scoreDisplay.textContent = currentScore;
  
  if (currentScore.includes('Game')) {
    btnP1.disabled = true;
    btnP2.disabled = true;
  } else {
    btnP1.disabled = false;
    btnP2.disabled = false;
  }
};

btnP1.addEventListener('click', () => {
  game.scorePlayer1();
  updateScore();
});

btnP2.addEventListener('click', () => {
  game.scorePlayer2();
  updateScore();
});

btnReset.addEventListener('click', () => {
  game.reset();
  updateScore();
});