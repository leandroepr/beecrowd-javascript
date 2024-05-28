const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const pairNumberFromInput = (text) => text.split('\n').map(Number).slice(0, 2);
const sum = (a, b) => a + b;
const formatAnswer = (x) => `X = ${x}`;

console.log(formatAnswer(sum(...pairNumberFromInput(input))));
