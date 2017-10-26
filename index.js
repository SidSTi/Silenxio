#!/usr/bin/env node
const chalk = require('chalk');
const Launcher = require('./services/launcher/launcher');

console.log(chalk.bgGreen(' ****** Hi, welcome to the Silenxio tool ******'));

let launcher = new Launcher();
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
launcher.launch(obj);


