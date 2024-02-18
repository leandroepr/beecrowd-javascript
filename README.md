# Beecrowd JavaScript Solutions

This project contains JavaScript solutions for programming challenges on the Beecrowd platform. It is organized by problem categories and includes automated tests for each solution. The project is set up with a focus on code quality, leveraging ESLint for linting, Prettier for code formatting, and Jest for testing.

## Project Structure

- `/assets` - Contains resources for problem descriptions, such as images.
- `/src` - Contains the source code for solutions.
- `/src/1.beginner`, `/src/2.ad-hoc`, etc. - Organized by problem categories.
- `/src/<category>/<problem_id>/problem/README.md` - Problem description from Beecrowd.
- `/src/<category>/<problem_id>/solutions/` - Contains solution files for the problem.
- `/src/<category>/<problem_id>/test/solutions.spec.js` - Automated tests for the solutions.

## Setup

To get started with this project, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/leandroepr/beecrowd-javascript.git
   cd beecrowd-javascript
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## Contributing

Contributions are welcome! Whether you're adding new solutions, improving existing ones, or fixing bugs, please follow these guidelines:

1. **Fork and clone the repository.**
2. **Create a new branch for your contribution.**
3. **Add or update solutions in the relevant `/src/<category>/<problem_id>/solutions/` directory.**
4. **Write tests for your solutions in `/src/<category>/<problem_id>/test/solutions.spec.js`.**
5. **Ensure your code follows the project's coding conventions by running linters and formatters:**

   ```bash
   npm run lint
   npm run format
   ```

6. **Submit a pull request with a clear description of your changes.**

## Tools and Dependencies

- **ESLint & Prettier** for code quality and formatting.
- **Jest** for automated testing.

## License

This project is licensed under the ISC license. See the [LICENSE](LICENSE) file for more details.
