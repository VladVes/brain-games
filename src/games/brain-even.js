import getRandomInteger from '../brainMath';

export const desc = 'Answer "yes" if number even otherwise anser "no"';
export const run = () => {
  const num = getRandomInteger(1, 10);
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return { question: num, answer };
};
