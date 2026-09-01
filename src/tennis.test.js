import TennisGame from './tennis';

describe('Marcador de Tenis', () => {
  it('Debería iniciar el set con el marcador Love-Love', () => {
    const game = new TennisGame();
    expect(game.getScore()).toBe('Love-Love');
  });
});