const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

class Solution {
  /**
   * @param {string} solutionPath
   */
  constructor(solutionPath) {
    const fullPath = path.resolve(__dirname, '../', solutionPath);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`The file at ${fullPath} does not exist.`);
    }
    this.path = fullPath;
  }

  /**
   * @param {string} input
   * @returns {string}
   */
  execute(input) {
    const result = spawnSync('node', [this.path], { input });
    const output = result.stdout.toString().slice(0, -1);
    return output;
  }
}

module.exports = Solution;
