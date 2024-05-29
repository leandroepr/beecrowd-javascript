class SumPair {
  constructor(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Invalid input');
    }
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }
}

module.exports = SumPair;
