const chalk = require('chalk');
const inquirer = require('inquirer');
const WeatherModel = require('../../Model/weather/WeatherModel');
const Launcher = require('../launcher/launcher');

class Weather {
  constructor() {
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
    Launcher.launch(questions).then((answers) => {
      switch (answers.name) {
        case 'city':
          this.showByCity();
          break;
        case 'zipcode':
          this.showByZipCode();
          break;
      }
    }).catch((err) => {
      console.log('Voici l\'erreur : ', err);
    })
  }

  showByCity() {
    const questions = {
      type: 'input',
      name: 'name',
      message: chalk.green('Enter your city'),
      default: 'Noisy-le-grand',
    };
    Launcher.launch(questions).then((answers) => {
      console.log('answers.name : ', answers.name);
      return new WeatherModel({city: 'paris'}).getCurrentWeatherByCity();
    }).catch((err) => {
      console.log('Voici l\'erreur : ', err);
    })
  }

  showByZipCode() {
    const questions = {
      type: 'input',
      name: 'name',
      message: chalk.green('Enter your zipcode'),
      // default: 93160,
    };
    Launcher.launch(questions).then((answers) => {
      if(answers.name === ''){
        console.log("Please enter the zipcode");
        return;
      }
      return new WeatherModel({zipcode: answers.name}).getCurrentWeatherByZipCode()
    }).catch((err) => {
      console.log('Voici l\'erreur : ', err);
    })
  }
}

module.exports = Weather;
