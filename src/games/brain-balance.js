import { getRandomInteger, arrayMax, arrayMin } from '../brainMath';
import launch from '..';

const desc = 'Balance the given number.';
const game = () => {
  const num = String(getRandomInteger(1, 1000));
  const mappedNum = num.split('').map(elem => Number(elem));
  const balance = (numbers) => {
    const { maxVal, maxIndx } = arrayMax(numbers);
    const { minVal, minIndx } = arrayMin(numbers);
    if (maxVal - minVal === 1 || maxVal === minVal) {
      return numbers.join('');
    }
    const newNumbers = numbers.slice();
    newNumbers[maxIndx] = maxVal - 1;
    newNumbers[minIndx] = minVal + 1;
    return balance(newNumbers);
  };

  const answer = balance(mappedNum);
  return { question: num, answer };
};

export default () => {
  launch(game, desc);
};
