import sunny from "./img/sunny.svg";
import cloudy from "./img/cloudy.svg";
import fog from "./img/fog.svg";
import partly_cloudy from "./img/partly_cloudy.svg";
import rain from "./img/rain.svg";
import snow from "./img/snow.svg";
import thunder from "./img/thunder.svg";

const searchLocation = "Przeworsk";

export async function getData() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=96c79cc416274630a78142949232906&q=${searchLocation}`,
    { mode: "cors" }
  );
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
    countryName,
    cityName,
    condition,
    tempC,
    tempF,
    windKph,
    windMph,
  };

  return locationObject;
}

export async function displayData(weatherData) {
  const display = document.querySelector(".display");
  display.classList.remove("hidden");

  console.log("event", weatherData);
  const cityName = document.querySelector(".cityName");
  cityName.textContent = weatherData.cityName;

  const countryName = document.querySelector(".countryName");
  countryName.textContent = weatherData.countryName;

  const conditionContainer = document.querySelector(".conditionContainer");
  const condition = document.querySelector(".condition");
  condition.textContent = weatherData.condition;

  const conditionImage = document.createElement("img");
  conditionImage.classList.add('conditionImage');

  if (
    condition.textContent.includes("sunny") ||
    condition.textContent.includes("Sunny")
  ) {
    conditionImage.src = sunny;
  } else if (
    condition.textContent.includes("rain") ||
    condition.textContent.includes("Rain") ||
    condition.textContent.includes("drizzle")
  ) {
    conditionImage.src = rain;
  } else if (condition.textContent.includes("partly")) {
    conditionImage.src = partly_cloudy;
  } else if (
    condition.textContent.includes("snow") ||
    condition.textContent.includes("Snow") ||
    condition.textContent.includes("sleet") ||
    condition.textContent.includes("freez") ||
    condition.textContent.includes("Blizzard")
  ) {
    conditionImage.src = snow;
  } else if (
    condition.textContent.includes("mist") ||
    condition.textContent.includes("Mist") ||
    condition.textContent.includes("Fog") ||
    condition.textContent.includes("fog")
  ) {
    conditionImage.src = fog;
  } else if (
    condition.textContent.includes("cloud") ||
    condition.textContent.includes("Cloud")
  ) {
    conditionImage.src = cloudy;
  } else if (
    condition.textContent.includes("thunder") ||
    condition.textContent.includes("Thunder")
  ) {
    conditionImage.src = thunder;
  }

  conditionContainer.appendChild(conditionImage);

  const tempC = document.querySelector(".tempC");
  tempC.textContent = weatherData.tempC + "°C";

  const tempF = document.querySelector(".tempF");
  tempF.textContent = weatherData.tempF + "°F";

  const windKph = document.querySelector(".windKph");
  windKph.textContent = `${weatherData.windKph} km/h`;

  const windMph = document.querySelector(".windMph");
  windMph.textContent = `${weatherData.windMph} mph`;
}
