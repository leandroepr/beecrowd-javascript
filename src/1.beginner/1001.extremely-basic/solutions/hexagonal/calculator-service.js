class CalculatorService {
  constructor(numbersDao) {
    this.numbersDao = numbersDao;
  }

  sumNumbers() {
    const [a, b] = this.numbersDao.getNumbers();
    const result = this.sum(a, b);
    return this.formatResult(result);
  }

  sum(a, b) {
    return a + b;
  }

  formatResult(result) {
    return `X = ${result}`;
  }
}

module.exports = CalculatorService;
