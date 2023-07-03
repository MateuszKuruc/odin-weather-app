import github from "./img/github.svg";
import { getData } from "./websiteLogic";
import { displayData } from "./websiteLogic";
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

  const searchBar = document.createElement("div");
  searchBar.classList.add("searchBar");

  const userInput = document.createElement("input");
  userInput.type = "text";
  userInput.classList.add("userInput");
  userInput.placeholder = "Enter city name...";

  userInput.addEventListener("keypress", handleKeyPress);

  const searchButton = document.createElement("button");
  searchButton.classList.add("searchButton");
  searchButton.textContent = "Search location";

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

  const errorMessage = document.createElement("h4");
  errorMessage.classList.add("errorMessage");
  errorMessage.textContent = "Please enter valid location details!";
  errorMessage.classList.add("hidden");

  searchBar.appendChild(errorMessage);
  searchBar.appendChild(userInput);
  searchBar.appendChild(searchButton);

  const display = document.createElement("div");
  display.classList.add("display");
  display.classList.add("hidden");

  const cityName = document.createElement("h2");
  cityName.classList.add("cityName");

  const countryName = document.createElement("h5");
  countryName.classList.add("countryName");

  const conditionContainer = document.createElement("div");
  conditionContainer.classList.add("conditionContainer");

  const condition = document.createElement("h3");
  condition.classList.add("condition");

  conditionContainer.appendChild(condition);

  const tempContainer = document.createElement("div");
  tempContainer.classList.add("tempContainer");
  const tempImage = document.createElement("img");
  tempImage.src = termometer;

  const tempC = document.createElement("h4");
  tempC.classList.add("tempC");

  const tempF = document.createElement("h4");
  tempF.classList.add("tempF");

  tempContainer.appendChild(tempImage);
  tempContainer.appendChild(tempC);
  tempContainer.appendChild(tempF);

  const windContainer = document.createElement("div");
  windContainer.classList.add("windContainer");

  const windImage = document.createElement("img");
  windImage.src = wind;

  const windKph = document.createElement("h4");
  windKph.classList.add("windKph");

  const windMph = document.createElement("h4");
  windMph.classList.add("windMph");

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

  container.appendChild(searchBar);
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

  // getData();
  // displayData();
  // useWebsite();
}
