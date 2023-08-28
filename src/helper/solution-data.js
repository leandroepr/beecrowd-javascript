const path = require("path");
const fs = require("fs");

function getSolutions(solutionPath, ...otherPath) {
  const solutionsDirPath = path.join(solutionPath, ...otherPath);
  const files = classifyDirItems(solutionsDirPath);
  return files
    .filter((file) => !file.isDirectory)
    .map(({ name, path }) => ({ name, path }));
}
function verifyPathExists(filePath) {
  try {
    fs.existsSync(filePath);
    return true; // O caminho existe
  } catch (err) {
    return false; // O arquivo não existe
  }
}
function verifyPathIsDirectory(filePath) {
  try {
    const stat = fs.statSync(filePath);
    return stat.isDirectory();
  } catch (err) {
    return false; // O diretório não existe ou houve um erro
  }
}
function classifyDirItems(dirPath) {
  try {
    const pathExists = verifyPathExists(dirPath);
    if (!pathExists) {
      throw new Error("The path does not exist");
    }
    const isDirectory = verifyPathIsDirectory(dirPath);
    if (!isDirectory) {
      throw new Error("The path is not a directory");
    }
    const files = fs.readdirSync(dirPath);

    const folderContent = files.map((file) => {
      const filePath = path.join(dirPath, file);
      const isDir = verifyPathIsDirectory(filePath);
      return {
        path: filePath,
        name: file,
        isDirectory: isDir,
      };
    });

    return folderContent;
  } catch (error) {
    console.error(`Error while processing ${dirPath}\n`, error);
    return [];
  }
}
function getSamples(solutionPath, ...otherPath) {
  const sampleDirPath = path.join(solutionPath, ...otherPath);
  const files = classifyDirItems(sampleDirPath);
  const samples = files
    .filter((file) => file.isDirectory)
    .reduce((sampleList, file) => {
      const sampleData = getSample(file.path);
      return [...sampleList, sampleData];
    }, []);
  return samples;
}
function getSample(sampleDirPath) {
  const splittedPath = sampleDirPath.split("/");
  const name = splittedPath[splittedPath.length - 1];
  const input = readFileContent(path.join(sampleDirPath, "input.txt"));
  const output = readFileContent(path.join(sampleDirPath, "output.txt"));
  return { input, output, name };
}
function readFileContent(filePath) {
  try {
    const fileExists = verifyPathExists(filePath);
    if (!fileExists) {
      throw new Error("File does not exist");
    }
    const isDirectory = verifyPathIsDirectory(filePath);
    if (isDirectory) {
      throw new Error("The path is not a file");
    }
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch (err) {
    console.error(`Error on reading the file: ${filePath}\n`, err);
    return "";
  }
}
function getAllSolutionData(solutionPath) {
  const splittedPath = solutionPath.split("/");
  const problemName = splittedPath[splittedPath.length - 1];
  const solutions = getSolutions(solutionPath, "solutions");
  const samples = getSamples(solutionPath, "test", "samples");
  return { problemName, solutions, samples };
}
module.exports = getAllSolutionData;

// const data = getAllSolutionData();
// console.log(data);
