const inquirer = require('inquirer');

class Launcher {
  launch(obj) {
    inquirer.prompt(obj).then((answers) => {
      switch (answers.name){
        case 'weather':
          const Weather = require('../weather/');
          const weather = new Weather();
          weather.show();
        break;
      }
    });
  }
}

module.exports = Launcher;
