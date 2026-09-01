class TennisGame {
  constructor() {
    this.p1Score = 0;
    this.p2Score = 0;
  }
  scorePlayer1() { this.p1Score++; }
  scorePlayer2() { this.p2Score++; }
  
  getScore() {
    const scores = ['Love', '15', '30', '40'];
    return `${scores[this.p1Score]}-${scores[this.p2Score]}`;
  }
}
export default TennisGame;