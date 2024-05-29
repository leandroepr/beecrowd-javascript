const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

class SimpleCalculator {
  constructor(a, b) {
    this.a = Number(a);
    this.b = Number(b);
  }

  printSum() {
    const result = this.a + this.b;
    return `X = ${result}`;
  }
}

const [a, b] = lines;
const calculator = new SimpleCalculator(a, b);
console.log(calculator.printSum());
