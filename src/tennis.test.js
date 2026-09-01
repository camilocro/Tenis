import TennisGame from './tennis';

describe('Marcador de Tenis', () => {
  it('Debería iniciar el set con el marcador Love-Love', () => {
    const game = new TennisGame();
    expect(game.getScore()).toBe('Love-Love');
  });

  it('Debería mostrar 15-Love cuando el Jugador 1 anota un punto', () => {
    const game = new TennisGame();
    game.scorePlayer1();
    expect(game.getScore()).toBe('15-Love');
  });
});