import { getRandomInteger } from '../services/BrainMath.js';
import readlineSync from 'readline-sync';

export default () => {
  const desc = 'What is the result of the expression?';
  console.log(desc);
  let attempt = 0;

  return () => {
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
    }
    attempt++;
    console.log(`Question: ${num1} ${operation} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = {userAnswer, answer};
    result.stageResult = Number(userAnswer) === answer;
    return result;
  };
};
