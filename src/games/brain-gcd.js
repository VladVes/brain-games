import { getRandomInteger, findDiv } from '../brainMath';
import gameStarter from '..';

const desc = 'Find the greatest common divisor of given numbers.';
const game = () => {
  const num1 = getRandomInteger(1, 15);
  const num2 = getRandomInteger(1, 15);
  const answer = findDiv(num1, num2);
  const question = `${num1} ${num2}`;
  return { question, answer: String(answer) };
};

export default () => {
  gameStarter(game, desc);
};
