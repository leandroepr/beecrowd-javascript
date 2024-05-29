class SolutionUseCase {
  constructor(sumPairRepository, presenter) {
    this.sumPairRepository = sumPairRepository;
    this.presenter = presenter;
  }

  execute() {
    const pair = this.sumPairRepository.getFirst();
    const result = pair.sum();
    this.presenter.printResult(result);
  }
}

module.exports = SolutionUseCase;
