const Launcher = require('./Services/launcher/launcher');
const chalk = require('chalk');
const Weather = require('./Services/weather/');

// let launcher = new Launcher();
const obj = {
  type: 'list',
  name: 'name',
  message: chalk.green('Choose what services you want to use ?'),
  default: 'weather',
  choices: [{
    key: 'w',
    name: 'Weather',
    value: 'weather'
  }]
};

Launcher.launch(obj).then((answers) => {
  switch (answers.name) {
    case 'weather':
      const Weather = require('./Services/weather/');
      return new Weather();
    break;
  }
}).catch((err) => {
  console.log('Voici l\'erreur : ', err);
})

