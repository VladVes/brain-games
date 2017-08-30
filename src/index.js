import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hellow ${userName}!`);
  return userName;
};

const greeting = (message) => {
  console.log('Welcome to the Brain Games!');
  if (message) {
    console.log(message);
  }
};

const gamesIntro = () => {
  greeting();
  getUserName();
};

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gameBrainEven = () => {
  const desc = 'Answer "yes" if number even otherwise anser "no"';
  greeting(desc);
  const stages = 3;
  const userName = getUserName();
  const game = (stg) => {
    if (stg === 0) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const num = getRandomInteger(1, 10);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correc answer was '${correctAnswer}'\n
        Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    game(stg - 1);
  };
  game(stages);
};

export { gamesIntro, gameBrainEven };
