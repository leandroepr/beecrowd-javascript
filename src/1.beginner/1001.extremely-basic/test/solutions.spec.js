const Solution = require('../../../core/solution');

const solutions = [
  {
    name: 'main',
    path: require.resolve('../solutions/main'),
  },
];

const samples = [
  {
    input: '10\n9',
    output: 'X = 19',
  },
  {
    input: '-10\n4',
    output: 'X = -6',
  },
  {
    input: '15\n-7\n',
    output: 'X = 8',
  },
];

describe('beecrowd 1001 | Extremely Basic', () => {
  solutions.forEach((solutionData) => {
    describe(`should test the solution: ${solutionData.name}`, () => {
      samples.forEach((sample, index) => {
        it(`should succeed with the sample ${index}`, () => {
          const solution = new Solution({
            solutionPath: solutionData.path,
            timeout: 1000,
          });
          const output = solution.execute(sample.input);
          expect(output).toBe(sample.output);
        });
      });
    });
  });
});
