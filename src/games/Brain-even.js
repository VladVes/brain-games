import { getRandomInteger } from '../services/BrainMath.js';
import readlineSync from 'readline-sync';

export default () => {
  const desc = 'Answer "yes" if number even otherwise anser "no"';
  console.log(desc);

  return () => {
    const num = getRandomInteger(1, 10);
    const answer = num % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = {userAnswer, answer};
    result.stageResult = userAnswer === answer;
    return result;
  };
};
