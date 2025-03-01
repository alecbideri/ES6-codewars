const add = (a, b) => a + b;

const square = (...args) => args.map((num) => num * num);

console.log(square(1, 2, 3, 4, 5));
