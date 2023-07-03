const searchLocation = 'Przeworsk'
const updateButton = document.getElementById('searchButton');
const userInput = document.querySelector('userInput');
// console.log(weatherData);
// console.log(getData);
// let locationObject;


async function getData() {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=96c79cc416274630a78142949232906&q=${searchLocation}`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    
    const countryName = weatherData.location.country;
    const cityName = weatherData.location.name;
    const condition = weatherData.current.condition.text;
    const tempC = weatherData.current.temp_c;
    const tempF = weatherData.current.temp_f;
    const windKph = weatherData.current.wind_kph;
    const windMph = weatherData.current.wind_mph;

    const locationObject = {
        countryName: countryName,
        cityName: cityName,
        condition: condition,
        tempC: tempC,
        tempF: tempF,
        windKph: windKph,
        windMph: windMph
    }
   
    return locationObject;
};



async function displayData(weatherData) {
    // console.log();
    console.log('event', weatherData);
    
}

updateButton.addEventListener('click', async () => {
    const weatherData = await getData();
    // console.log('event', weatherData);
     displayData(weatherData);
});
