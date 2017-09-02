import getRandomInteger from '../brainMath';

export const desc = 'Find the greatest common divisor of given numbers.';
export const run = () => {
  const num1 = getRandomInteger(1, 15);
  const num2 = getRandomInteger(1, 15);
  const findDiv = (n1, n2) => {
    const [dividend, divisor] = n1 >= n2 ? [n1, n2] : [n2, n1];
    if (dividend % divisor === 0) {
      return divisor;
    }
    return findDiv(dividend % divisor, divisor);
  };

  const answer = findDiv(num1, num2);
  const question = `${num1} ${num2}`;
  return { question, answer: String(answer) };
};
