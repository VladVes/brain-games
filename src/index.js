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

export default (game, desc, stages = 3) => {
  greeting();
  console.log(desc);
  const userName = userAuth();
  const runStage = (stgs) => {
    if (stgs === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { question, answer } = game();
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
