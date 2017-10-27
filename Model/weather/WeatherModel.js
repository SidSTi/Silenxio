const axios = require('axios');
const chalk = require('chalk');

class WeatherModel {
  constructor(obj){
    this.obj = obj;
  }

  getCurrentWeatherByZipCode() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.obj.zipcode},fr&units=metric&APPID=50dcbd1e0a554438e21b697aea92499f`)
      .then((response) => {
        let city = response.data.city.name;
        let result = response.data.list[0].main.temp;
        console.log(chalk.blue(`The weather at ${city} is: ${result}°C`))
      })
      .catch(() => {
        console.log('No result found')
      })
  };

  getCurrentWeatherByCity() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.obj.city}&units=metric&APPID=50dcbd1e0a554438e21b697aea92499f`)
      .then((response) => {
        let city = response.data.city.name;
        let result = response.data.list[0].main.temp;
        console.log(chalk.blue(`The weather at ${city} is: ${result}°C`))
      })
      .catch(() => {
        console.log('No result found')
      })
  };
}

module.exports = WeatherModel;
