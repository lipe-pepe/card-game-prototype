import readline from "readline";

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    terminal.question(question, (answer) => {
      resolve(answer);
    });
  });
};

export default askQuestion;
