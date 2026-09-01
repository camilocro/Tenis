class TennisGame {
  constructor() {
    this.p1Score = 0;
    this.p2Score = 0;
  }
  scorePlayer1() { this.p1Score++; }
  scorePlayer2() { this.p2Score++; }
  
  reset() {
    this.p1Score = 0;
    this.p2Score = 0;
  }
  
  getScore() {
    if (this.p1Score >= 4 && this.p1Score - this.p2Score >= 2) return 'Game for Player 1';
    if (this.p2Score >= 4 && this.p2Score - this.p1Score >= 2) return 'Game for Player 2';

    if (this.p1Score >= 3 && this.p2Score >= 3) {
      if (this.p1Score === this.p2Score) return 'Deuce';
      if (this.p1Score - this.p2Score === 1) return 'Advantage Player 1';
      if (this.p2Score - this.p1Score === 1) return 'Advantage Player 2';
    }

    const scores = ['Love', '15', '30', '40'];
    return `${scores[this.p1Score]}-${scores[this.p2Score]}`;
  }
}
export default TennisGame;