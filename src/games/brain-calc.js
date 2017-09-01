import { getRandomInteger } from '../brainMath';
import { definer } from '../generic';

const desc = 'What is the result of the expression?';
let attempt = 0;
const game = () => {
  const num1 = getRandomInteger(1, 10);
  const num2 = getRandomInteger(1, 10);
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
      return 'error: operation out of attempts';
  }
  attempt += 1;
  const question = `${num1} ${operation} ${num2}`;
  return { question, answer: String(answer) };
};

definer('brainCalc', desc, game);
