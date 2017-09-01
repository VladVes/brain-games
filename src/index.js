import readlineSync from 'readline-sync';
import { getGame } from './generic';
import './games/brain-even';
import './games/brain-calc';

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
  userAuth();
};

export default (gameName, stages = 3) => {
  greeting();
  const game = getGame(gameName);
  console.log(game.desc);
  const userName = userAuth();
  const runStage = (stgs) => {
    if (stgs === 0) {
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
    runStage(stgs - 1);
  };

  runStage(stages);
};
