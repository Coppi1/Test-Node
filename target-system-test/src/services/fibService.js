exports.isFibonacci = (num) => {
  let a = 0,
    b = 1,
    temp;

  while (b < num) {
    temp = b;
    b = a + b;
    a = temp;
  }

  return b === num || num === 0;
};
