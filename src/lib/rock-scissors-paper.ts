/*
  Explanation of this TYPE implementation
  https://www.youtube.com/watch?v=JfcLkoBirZo&t=329
*/

export const GameOptions = {
  rock: 'rock',
  scissors: 'scissors',
  paper: 'paper',
} as const;

export type TGameOptions = typeof GameOptions[keyof typeof GameOptions];

export const rockScissorsPaper = (
  player1: TGameOptions | string,
  player2: TGameOptions | string,
): string => {
  if (player1 === player2) return 'tie';

  if (player1 === GameOptions.rock && player2 === GameOptions.scissors)
    return 'Player1';

  if (player1 === GameOptions.scissors && player2 === GameOptions.paper)
    return 'Player1';

  if (player1 === GameOptions.paper && player2 === GameOptions.rock)
    return 'Player1';

  return 'Player2';
};
