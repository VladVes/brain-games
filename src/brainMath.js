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
