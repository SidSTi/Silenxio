const axios = require('axios');
const chalk = require('chalk');

let getCurrentWeather = (zipcode) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},fr&units=metric&APPID=50dcbd1e0a554438e21b697aea92499f`)
        .then((response) => {
            let result = response.data.list[0].main.temp
            console.log(chalk.blue(`La température à Noisy-le-Grand est de: ${result}°C`))
        })
}

console.log('hotfix test')

module.exports = {
    getCurrentWeather
}
