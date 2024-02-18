const Solution = require('../../../core/solution');

const solutions = [
  {
    name: 'main',
    path: require.resolve('../solutions/main'),
  },
  {
    name: 'object oriented programming',
    path: require.resolve('../solutions/poo'),
  },
];

const sample = {
  input: '',
  output: 'Hello World!',
};

describe('beecrowd 1000 | Hello World!', () => {
  solutions.forEach((solutionData) => {
    it(`should test the solution: ${solutionData.name}`, () => {
      const solution = new Solution({
        solutionPath: solutionData.path,
        timeout: 1000,
      });
      const output = solution.execute(sample.input);
      expect(output).toBe(sample.output);
    });
  });
});
