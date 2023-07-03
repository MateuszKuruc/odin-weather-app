/* eslint-disable no-use-before-define */
/* eslint-disable import/no-mutable-exports */
import github from "./img/github.svg";
import { getData, displayData } from "./websiteLogic";
import termometer from "./img/termometer.svg";
import wind from "./img/wind.svg";

export let searchLocation;

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const siteName = document.createElement("h1");
  siteName.textContent = "Weather App";

  header.appendChild(siteName);

  return header;
}

function createMain() {
  const container = document.createElement("div");
  container.classList.add("container");

  const topContainer = document.createElement("div");
  topContainer.classList.add("topContainer");

  const searchBar = document.createElement("div");
  searchBar.classList.add("searchBar");

  const userInput = document.createElement("input");
  userInput.type = "text";
  userInput.classList.add("userInput");
  userInput.placeholder = "Enter city name...";

  userInput.addEventListener("keypress", handleKeyPress);

  const searchButton = document.createElement("button");
  searchButton.classList.add("searchButton");
  searchButton.textContent = "Search";

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      searchWeather();
    }
  }

  async function searchWeather() {
    searchLocation = userInput.value;
    if (userInput.value.length < 2) return;

    const weatherData = await getData();

    const imagesToRemove = display.querySelectorAll(".conditionImage");

    imagesToRemove.forEach((image) => {
      image.remove();
    });

    displayData(weatherData);

    userInput.value = "";
    errorMessage.classList.add("hidden");
  }

  function toggleUnit() {
    tempF.classList.toggle("hidden");
    tempC.classList.toggle("hidden");
    windMph.classList.toggle("hidden");
    windKph.classList.toggle("hidden");
  }

  const errorMessage = document.createElement("h4");
  errorMessage.classList.add("errorMessage");
  errorMessage.textContent = "Please enter valid location details!";
  errorMessage.classList.add("hidden");

  container.appendChild(errorMessage);
  searchBar.appendChild(userInput);
  searchBar.appendChild(searchButton);

  const toggleContainer = document.createElement("div");
  toggleContainer.classList.add("toggleContainer");

  const toggleSwitch = document.createElement("input");
  toggleSwitch.classList.add("toggleSwitch");
  toggleSwitch.type = "checkbox";
  toggleSwitch.checked = "true";
  toggleSwitch.id = "toggle";

  const toggleLabel = document.createElement("lable");
  toggleLabel.htmlFor = "toggle";
  toggleLabel.textContent = "°C/kmh";

  toggleSwitch.addEventListener("click", toggleUnit);

  toggleContainer.appendChild(toggleSwitch);
  toggleContainer.appendChild(toggleLabel);

  topContainer.appendChild(searchBar);
  topContainer.appendChild(toggleContainer);

  const display = document.createElement("div");
  display.classList.add("display");
  display.classList.add("hidden");

  const cityName = document.createElement("h1");
  cityName.classList.add("cityName");

  const countryName = document.createElement("h5");
  countryName.classList.add("countryName");

  const conditionContainer = document.createElement("div");
  conditionContainer.classList.add("conditionContainer");

  const condition = document.createElement("h2");
  condition.classList.add("condition");

  conditionContainer.appendChild(condition);

  const tempContainer = document.createElement("div");
  tempContainer.classList.add("tempContainer");
  const tempImage = document.createElement("img");
  tempImage.src = termometer;

  const tempC = document.createElement("h2");
  tempC.classList.add("tempC");

  const tempF = document.createElement("h2");
  tempF.classList.add("tempF");
  tempF.classList.add("hidden");

  tempContainer.appendChild(tempImage);
  tempContainer.appendChild(tempC);
  tempContainer.appendChild(tempF);

  const windContainer = document.createElement("div");
  windContainer.classList.add("windContainer");

  const windImage = document.createElement("img");
  windImage.src = wind;

  const windKph = document.createElement("h2");
  windKph.classList.add("windKph");

  const windMph = document.createElement("h2");
  windMph.classList.add("windMph");
  windMph.classList.add("hidden");

  windContainer.appendChild(windImage);
  windContainer.appendChild(windKph);
  windContainer.appendChild(windMph);

  [
    cityName,
    countryName,
    conditionContainer,
    tempContainer,
    windContainer,
  ].forEach((item) => {
    display.appendChild(item);
  });

  container.appendChild(topContainer);
  container.appendChild(display);

  return container;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const signature = document.createElement("h4");
  signature.textContent = "Mateusz Kuruc 2023";

  const githubImg = document.createElement("img");
  githubImg.src = github;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/MateuszKuruc?tab=repositories";
  githubLink.target = "blank";

  githubLink.appendChild(githubImg);

  footer.appendChild(signature);
  footer.appendChild(githubLink);

  return footer;
}

export function startWebsite() {
  const { body } = document;

  body.appendChild(createHeader());
  body.appendChild(createMain());
  body.appendChild(createFooter());
}
