// INFO: Over-engineered solution to test hexagonal concepts

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const NumbersDao = require('./numbers-dao');
const CalculatorService = require('./calculator-service');

const numbersDao = new NumbersDao(input);
const calculatorService = new CalculatorService(numbersDao);

console.log(calculatorService.sumNumbers());
