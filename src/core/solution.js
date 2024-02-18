const { spawnSync } = require('child_process');
const fs = require('fs');

class Solution {
  /**
   * Constructor that accepts named parameters.
   * @param {Object} params - Object containing the parameters for the constructor.
   * @param {string} params.solutionPath - The path to the solution file.
   * @param {number} [params.timeout=5000] - Timeout in milliseconds (optional).
   */
  constructor({ solutionPath, timeout = 5000 }) {
    if (!fs.existsSync(solutionPath)) {
      throw new Error(`The file at ${solutionPath} does not exist.`);
    }
    this.path = solutionPath;
    this.timeout = timeout; // Timeout in milliseconds
  }

  /**
   * Executes the solution file synchronously with the provided input.
   * @param {string} input
   * @returns {string} output
   */
  execute(input) {
    const result = spawnSync('node', [this.path], {
      input,
      timeout: this.timeout,
      shell: true,
      encoding: 'utf-8',
    });

    if (result.error) {
      if (result.error.code === 'ETIMEDOUT') {
        throw new Error('Process terminated due to timeout');
      }
      throw result.error;
    }

    if (result.status !== 0) {
      throw new Error(`Process exited with code ${result.status}: ${result.stderr}`);
    }

    return result.stdout.trim();
  }
}

module.exports = Solution;
