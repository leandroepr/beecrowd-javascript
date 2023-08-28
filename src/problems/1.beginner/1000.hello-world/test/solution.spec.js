const path = require("path");
const { spawnSync } = require("child_process");
const { describe, test, expect } = require("@jest/globals");

const getAllSolutionData = require("../../../../helper/solution-data");

const solutionPath = path.resolve(__dirname, "../");
const { problemName, samples, solutions } = getAllSolutionData(solutionPath);
describe(`Resolução do problema: ${problemName}`, () => {
  solutions.forEach((solution) => {
    describe(`Solução ${solution.name}`, () => {
      samples.forEach(({ input, output, name }) => {
        test(`${name}`, () => {
          const result = spawnSync("node", [solution.path], { input });
          const outputContent = result.stdout.toString().slice(0, -1);
          expect(outputContent).toBe(output);
        });
      });
    });
  });
});
