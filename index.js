const url = 'https://weather221.p.rapidapi.com/callback';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '84df5f37f0msh8546ac3324afefdp10bf8cjsn8e4031bc34c1',
        'x-rapidapi-host': 'weather221.p.rapidapi.com'
    }
};

async function fetchWeather() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchWeather();
