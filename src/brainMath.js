export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const findGcd = (n1, n2) => {
  const [dividend, divisor] = n1 >= n2 ? [n1, n2] : [n2, n1];
  if (dividend % divisor === 0) {
    return divisor;
  }
  return findGcd(dividend % divisor, divisor);
};

export const arrayMax = arr => arr.reduce((acc, elem, index) => {
  if (acc.maxVal <= elem) {
    acc.maxVal = elem;
    acc.maxIndx = index;
  }
  return acc;
}, { maxVal: arr[0], maxIndx: 0 });

export const arrayMin = arr => arr.reduce((acc, elem, index) => {
  if (acc.minVal >= elem) {
    acc.minVal = elem;
    acc.minIndx = index;
  }
  return acc;
}, { minVal: arr[0], minIndx: 0 });

export const selectRndOperation = (ops) => {
  const operation = ops[getRandomInteger(0, ops.length)];
  switch (operation) {
    case '+':
      return (a, b) => a + b;
    case '-':
      return (a, b) => a - b;
    case '*':
      return (a, b) => a * b;
    case '/':
      return (a, b) => Math.floor(a / b);
    default:
      throw new Error('operation select error');
  }
};

export const mathProgressionGen = (startValue = [1], ratio, operations, length) => {
  const operation = selectRndOperation(operations);
  const makeSequence = (sequence, len) => {
    if (len === 0) {
      return sequence;
    }
    const lastValue = sequence[sequence.length - 1];
    const newSequence = sequence.slice();
    newSequence.push(operation(lastValue, ratio));

    return makeSequence(newSequence, len - 1);
  };
  return makeSequence(startValue, length);
};
