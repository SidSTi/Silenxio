#!/usr/bin/env node
const program = require('commander');
const Meteo = require('./data/meteo');

program
  .arguments('meteo')
  .option('-z, --zipcode <zipcode>', 'show meteo for the zipcode')
  .action(function () {
    Meteo.getCurrentWeather(program.zipcode)
  })
  .parse(process.argv);
