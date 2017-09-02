import { getRandomInteger } from '../brainMath';
import gameStarter from '..';

const desc = 'What is the result of the expression?';
const game = () => {
  const num1 = getRandomInteger(1, 10);
  const num2 = getRandomInteger(1, 10);
  const attempt = getRandomInteger(0, 3);
  let answer = null;
  let operation = '';
  switch (attempt) {
    case 0:
      operation = '+';
      answer = num1 + num2;
      break;
    case 1:
      operation = '-';
      answer = num1 - num2;
      break;
    case 2:
      operation = '*';
      answer = num1 * num2;
      break;
    default:
      return 'error: operation not found';
  }
  const question = `${num1} ${operation} ${num2}`;
  return { question, answer: String(answer) };
};

export default () => {
  gameStarter(game, desc);
};
