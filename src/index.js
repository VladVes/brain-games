import readlineSync from 'readline-sync';

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

const gamesIntro = (message = null) => {
  greeting(message);
  getUserName();
};

export default (gameInit, stages = 3) => {
  greeting();
  const game = gameInit();
  const userName = userAuth();
  const runStage = (stages) => {
    if (stages === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { stageResult, userAnswer, answer } = game();
    if (!stageResult) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\n
        Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    runStage(stages - 1);
  };

  runStage(stages);
};

export { gamesIntro };
