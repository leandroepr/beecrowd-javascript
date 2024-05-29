class NumbersDao {
  constructor(input) {
    this.numbers = input.split('\n').filter(Boolean).map(Number);
  }

  getNumbers() {
    return this.numbers;
  }
}

module.exports = NumbersDao;
