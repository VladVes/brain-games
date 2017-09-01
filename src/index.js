import readlineSync from 'readline-sync';
import { getGame } from './generic.js';
import * as brainEven from './games/brain-even.js';
import * as brainCalc from './games/brain-calc.js';

const userAuth = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hellow, ${name}`);
  return name;
};

const greeting = (message) => {
  console.log('Welcome to the Brain Games!');
  if (message) {
    console.log(message);
  }
};

export const gamesIntro = (message = null) => {
  greeting(message);
  getUserName();
};

export default (gameName, stages = 3) => {
  greeting();
  const game = getGame(gameName);
  console.log(game.desc);
  const userName = userAuth();
  const runStage = (stages) => {
    if (stages === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { question, answer } = game.body();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\n
        Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    runStage(stages - 1);
  };

  runStage(stages);
};
