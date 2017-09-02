import { getRandomInteger, findGcd } from '../brainMath';
import gameStarter from '..';

const desc = 'Find the greatest common divisor of given numbers.';
const game = () => {
  const num1 = getRandomInteger(1, 15);
  const num2 = getRandomInteger(1, 15);
  return { question: `${num1} ${num2}`, answer: String(findGcd(num1, num2)) };
};

export default () => {
  gameStarter(game, desc);
};
