const Solution = require('./src/core/solution');

const problem1000 = require.resolve('./src/1.beginner/1000.hello-world/solutions/main');
const solution = new Solution(problem1000);
console.log(solution.execute('')); // Hello World!
