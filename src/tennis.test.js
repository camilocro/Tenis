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
  it('Debería manejar puntajes generales como 30-15', () => {
    const game = new TennisGame();
    game.scorePlayer1();
    game.scorePlayer1();
    game.scorePlayer2();
    expect(game.getScore()).toBe('30-15');
  });
  it('Debería mostrar Deuce si ambos jugadores llegan a 40 (3 puntos cada uno)', () => {
    const game = new TennisGame();
    for (let i = 0; i < 3; i++) {
      game.scorePlayer1();
      game.scorePlayer2();
    }
    expect(game.getScore()).toBe('Deuce');
  });
});