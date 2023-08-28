const { spawnSync } = require("child_process");
const { describe, test, expect } = require("@jest/globals");

function runTests(problemName, solutions, samples) {
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
}

module.exports = runTests;
