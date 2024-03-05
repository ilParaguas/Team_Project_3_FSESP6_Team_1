let newsJson;
const tabsScroll = document.getElementById("tabs-slide");
const cardsUpdates = document.getElementById("cards-updates");
const lastUpdatesNewsJsonUrl = `${location.protocol}//${location.host}/json/last-updates-${localStorage.getItem("language")}.json`;
const lastUpdatesLanguageJsonUrl = `${location.protocol}//${location.host}/json/last-updates.json`;
const lastUpdatesMediaUrl = `${location.protocol}//${location.host}/media/last-updates/`;

async function renderLastUpdates(languageUrl, newsUrl) {
  const response1 = await fetch(languageUrl);
  const response2 = await fetch(newsUrl);
  const languageJson = await response1.json();
  newsJson = await response2.json();
  loadLastUpdates(languageJson, newsJson);
}

function loadLastUpdates(languageJson, newsJson) {
  document.getElementById("updates-title").innerText =languageJson[localStorage.getItem("language")].title;
  createTabs(newsJson);
  createCards(newsJson);
  document.getElementById("read-more-link").innerText =languageJson[localStorage.getItem("language")].readMore;
  document.getElementById("read-more-text").innerText =languageJson[localStorage.getItem("language")].readMore;
}

function createTabs(json) {
  const updatesTabs = document.createElement("ul");
  updatesTabs.id = "updates-tabs";

  for (const key in json) {
    updatesTabs.appendChild(createTab(key));
  }
  tabsScroll.appendChild(updatesTabs);

  const tabs = document.getElementsByClassName("update-tab");
  tabs[0].style.borderLeft = "none";
  tabs[tabs.length - 1].style.borderRight = "none";

  if (tabsScroll.scrollWidth > tabsScroll.clientWidth) {
    document.getElementById("arrow-right").style.display = "block";
  }
}

function createTab(news) {
  const tab = document.createElement("li");
  tab.id = news;
  tab.innerHTML = `<input type='radio' id='radio-${news}' class='tab-radio' name='tab-value'>`;
  tab.appendChild(createLink(news));
  tab.appendChild(document.createElement("hr"));
  return tab;
}

function createLink(news) {
  const a = document.createElement("a");
  a.classList.add("update-tab");
  a.href = "#" + news;
  a.innerHTML = `<span>${news.replaceAll("-", "\xa0")}</span>`;

  a.addEventListener("click", (event) => {
    event.preventDefault();

    window.location = window.location.href.split("#")[0] + "#" + news;
    event.target.scrollIntoView({block: "nearest",behavior: "smooth",inline: "center"});
    if (event.target.nodeName === "A") {
      updateCards(event.target.href.split("#")[1]);
    } else {
      updateCards(event.target.parentElement.href.split("#")[1]);
    }
    document.getElementById(
      "radio-" + event.target.parentElement.href.split("#")[1]
    ).checked = true;
  });
  return a;
}

function createCards(json) {
  const splitUrl = window.location.href.split("#");
  if (!splitUrl[1] || !newsJson[splitUrl[1]]) {
    document.getElementsByClassName("tab-radio")[0].checked = true;
    updateCards(Object.keys(json)[0]);
  } else {
    document.getElementById("radio-" + splitUrl[1]).checked = true;
    updateCards(splitUrl[1]);
  }
}

function updateCards(news) {
  cardsUpdates.innerHTML = "";
  const cardsContent = newsJson[news];
  const card = createCardContainer();
  let img, info, title, text;

  cardsContent.forEach((content) => {
    img = `<img class='card-img' src='${lastUpdatesMediaUrl + content.Picture}' alt='${content.Picture}'>`;
    if (content.Company != "") {
      info = `<span class='card-company'>${content.Company}</span><span class='card-date'>${content.Date}</span>`;
    } else {
      info = `<span class='card-company'>${content.Date}</span>`;
    }
    title = `<h3 class='card-title'>${content.Title}</h3>`;
    text = `<p class='card-text'>${content.Text}</p>`;
    card.innerHTML = img + `<div>${info + title + text}</div>`;
    cardsUpdates.append(card.cloneNode(true));
  });
  setTimeout(() => {
    for (const e of cardsUpdates.children) {
      e.classList.remove("updates-hovered");
    }
  }, 150);
}

function createCardContainer() {
  const card = document.createElement("a");
  card.href = "#";
  card.classList.add("card-updates");
  card.classList.add("updates-hovered");
  return card;
}

renderLastUpdates(lastUpdatesLanguageJsonUrl, lastUpdatesNewsJsonUrl);


