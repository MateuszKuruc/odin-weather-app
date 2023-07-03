import github from "./img/github.svg";

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

  const searchButton = document.createElement("button");
  searchButton.classList.add("searchButton");

  const display = document.createElement("div");
  display.classList.add("display");

  userInput.appendChild(userInput);
  userInput.appendChild(searchButton);

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
