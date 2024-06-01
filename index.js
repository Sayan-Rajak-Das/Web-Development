// const url = 'http://api.openweathermap.org/data/2.5/weather?q=Kolakata&appid=57f047b9f6a1af65e88df22b7a1d6b8e';
// const options = {
//     method: 'GET',
//     // headers: {
//     //     'x-rapidapi-key': '84df5f37f0msh8546ac3324afefdp10bf8cjsn8e4031bc34c1',
//     //     'x-rapidapi-host': 'weather221.p.rapidapi.com'
//     // }
// };

// function fetchWeather() {
//     // try {
//     //     const response = await fetch(url)
//     //     .then
//     //     const result = await response.json();
//     //     console.log(result);
//     // } catch (error) {
//     //     console.error(error);
//     // }
//     fetch(url)
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     console.log(json.weather[0].description)
//     // document.get
//   });
  
// }

// fetchWeather();

document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const city = document.getElementById('cityInput').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57f047b9f6a1af65e88df22b7a1d6b8e`;

  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('City not found');
          }
          return response.json();
      })
      .then(data => {
        const tempCelsius = (data.main.temp - 273.15).toFixed(2);            //Kelvin to Celcius
        const feelsLikeCelsius = (data.main.feels_like - 273.15).toFixed(2); //Kelvin to Celcius
        const tempMinCelsius = (data.main.temp_min - 273.15).toFixed(2);     //Kelvin to Celcius
        const tempMaxCelsius = (data.main.temp_max - 273.15).toFixed(2);     //Kelvin to Celcius

        const weatherDescription = `City: ${data.name}, ${data.sys.country}\n` +
                                   `Temperature: ${tempCelsius}°C\n` +
                                   `Feels Like: ${feelsLikeCelsius}°C\n` +
                                   `Min Temperature: ${tempMinCelsius}°C\n` +
                                   `Max Temperature: ${tempMaxCelsius}°C\n` +
                                   `Weather: ${data.weather[0].description}\n` +
                                   `Humidity: ${data.main.humidity}%\n` +
                                   `Wind Speed: ${data.wind.speed} m/s\n` +
                                   `Cloudiness: ${data.clouds.all}%\n` +
                                   `Pressure: ${data.main.pressure} hPa`;
          document.getElementById('weatherReport').value = weatherDescription;
      })
      .catch(error => {
          document.getElementById('weatherReport').value = error.message;
      });
});

