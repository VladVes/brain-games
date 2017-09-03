import { getRandomInteger, isPrimeNumber } from '../brainMath';
import launch from '..';

const desc = 'Is the given numbers prime?';
const game = () => {
  const num = getRandomInteger(1, 100);
  const answer = isPrimeNumber(num) ? 'yes' : 'no';
  return { question: num, answer };
};

export default () => {
  launch(game, desc);
};
