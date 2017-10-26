const axios = require('axios');
const chalk = require('chalk');

class WeatherModel {
  constructor(zipcode, city){
    this.zipcode = zipcode;
    this.city = city;
  }

  getCurrentWeatherByZipCode() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.zipcode},fr&units=metric&APPID=50dcbd1e0a554438e21b697aea92499f`)
      .then((response) => {
        let result = response.data.list[0].main.temp;
        console.log(chalk.blue(`The weather at Noisy-le-Grand is: ${result}°C`))
      })
  };

  getCurrentWeatherByCity() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&APPID=50dcbd1e0a554438e21b697aea92499f`)
      .then((response) => {
        let result = response.data.list[0].main.temp;
        console.log(chalk.blue(`The weather at ${this.city} is: ${result}°C`))
      })
  };
}

module.exports = WeatherModel;
