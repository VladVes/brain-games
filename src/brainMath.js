export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const findGcd = (n1, n2) => {
  const [dividend, divisor] = n1 >= n2 ? [n1, n2] : [n2, n1];
  if (dividend % divisor === 0) {
    return divisor;
  }
  return findGcd(dividend % divisor, divisor);
};
