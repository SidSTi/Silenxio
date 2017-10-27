const inquirer = require('inquirer');

class Launcher {
  launch(obj) {
    return inquirer.prompt(obj)
  }
}

const launcher = new Launcher();

module.exports = launcher;
