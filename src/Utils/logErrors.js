import Chalk from "chalk";
module.exports = err => {
  return console.log(Chalk.red(err));
};
