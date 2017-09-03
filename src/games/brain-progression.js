import { getRandomInteger, mathProgressionGen } from '../brainMath';
import launch from '..';

const desc = 'What numder is missing in this progression?';
const game = () => {
  const operations = ['+', '-', '*'];
  const ratio = getRandomInteger(2, 4);
  const startValue = getRandomInteger(1, 10);
  const progressionLength = 10;
  const sequence = mathProgressionGen([startValue], ratio, operations, progressionLength);
  const indexOfNumberToGuess = getRandomInteger(0, progressionLength);
  const answer = sequence[indexOfNumberToGuess];
  const question = sequence.slice();
  question[indexOfNumberToGuess] = '..';
  return { question: question.join(' '), answer: String(answer) };
};

export default () => {
  launch(game, desc);
};
