const chalk = require('chalk');
const inquirer = require('inquirer');
const WeatherModel = require('../../data/weather/WeatherModel');

class Weather {
  show() {
    const questions = {
      type: 'list',
      name: 'name',
      message: chalk.green('Display the weather by : '),
      default: 'city',
      choices: [
        {
          key: 'c',
          name: 'City',
          value: 'city'
        },
        {
          key: 'z',
          name: 'Zipcode',
          value: 'zipcode'
        }]
    };
    inquirer.prompt(questions).then((answers) => {
      switch (answers.name) {
        case 'city':
          this.showByCity();
          break;
        case 'zipcode':
          this.showByZipCode();
          break;
      }
    });
  }

  showByCity() {
    const questions = {
      type: 'input',
      name: 'name',
      message: chalk.green('Enter your city'),
      default: 'Noisy-le-grand',
    };
    inquirer.prompt(questions).then((answers) => {
      return new WeatherModel().getCurrentWeatherByCity(answers.name);
    });
  }

  showByZipCode() {
    const questions = {
      type: 'input',
      name: 'name',
      message: chalk.green('Enter your zipcode'),
      default: 93160,
    };
    inquirer.prompt(questions).then((answers) => {
      return new WeatherModel().getCurrentWeatherByZipCode(answers.name)
    });
  }
}

module.exports = Weather;
