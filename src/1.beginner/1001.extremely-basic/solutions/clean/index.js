// INFO: Over-engineered solution to test clean architecture concepts

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const SolutionUseCase = require('./use-case');
const SumPairRepositoryInput = require('./sum-pair-repository-input');
const ConsolePresenter = require('./console-presenter');

const sumPairRepository = new SumPairRepositoryInput(input);
const presenter = new ConsolePresenter();
const useCase = new SolutionUseCase(sumPairRepository, presenter);

useCase.execute();
