export type Choice = 'rock' | 'paper' | 'scissors';

export const choices: Choice[] = ['rock', 'paper', 'scissors'];

export const getRandomChoice = (): Choice => {
  return choices[Math.floor(Math.random() * choices.length)];
};

export const determineWinner = (user: Choice, cpu: Choice): string => {
  if (user === cpu) return 'Draw';
  if (
    (user === 'rock' && cpu === 'scissors') ||
    (user === 'paper' && cpu === 'rock') ||
    (user === 'scissors' && cpu === 'paper')
  ) {
    return 'You Win!';
  }
  return 'You Lose!';
};
