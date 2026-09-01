import TennisGame from './tennis.js';

const game = new TennisGame();
const scoreDisplay = document.querySelector('#score-display');
const btnP1 = document.querySelector('#btn-p1');
const btnP2 = document.querySelector('#btn-p2');

const updateScore = () => {
  scoreDisplay.textContent = game.getScore();
};

btnP1.addEventListener('click', () => {
  game.scorePlayer1();
  updateScore();
});

btnP2.addEventListener('click', () => {
  game.scorePlayer2();
  updateScore();
});