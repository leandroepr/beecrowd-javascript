const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function compose(...functions) {
  return (input) => functions.reduce((acc, fn) => fn(acc), input);
}

const parseNumbers = (lines) => lines.filter(Boolean).map(Number);
const calculateSum = (numbers) => numbers.reduce((acc, cur) => acc + cur, 0);
const formatResult = (x) => `X = ${x}`;

const solution = compose(parseNumbers, calculateSum, formatResult);

console.log(solution(lines));
