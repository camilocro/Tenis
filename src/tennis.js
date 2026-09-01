class TennisGame {
  constructor() {
    this.p1Score = 0;
  }
  scorePlayer1() {
    this.p1Score++;
  }
  getScore() {
    if (this.p1Score === 1) return '15-Love';
    return 'Love-Love';
  }
}
export default TennisGame;