const Solution = require('../../../solution/solution');

const solutions = [
  {
    name: 'main',
    path: '1.beginner/1000.hello-world/solutions/main.js',
  },
  {
    name: 'poo-solution',
    path: '1.beginner/1000.hello-world/solutions/poo-solution.js',
  },
];

const sample = {
  input: '',
  output: 'Hello World!',
};

describe('beecrowd 1000 | Hello World!', () => {
  solutions.forEach((solutionData) => {
    it(`should test the solution: ${solutionData.name}`, () => {
      const solution = new Solution(solutionData.path);
      const output = solution.execute(sample.input);
      expect(output).toBe(sample.output);
    });
  });
});
