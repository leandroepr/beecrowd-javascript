const SumPair = require('./sum-pair');

class SumPairRepositoryInput {
  constructor(input) {
    this.numbers = input.split('\n').map(Number);
  }

  getFirst() {
    const [a, b] = this.numbers;
    return new SumPair(a, b);
  }
}

module.exports = SumPairRepositoryInput;
