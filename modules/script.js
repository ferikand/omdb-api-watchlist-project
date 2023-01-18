import { renderMovies, renderFromLocalStorage, onMovieClick } from "./utils.js";
import {
  searchInp,
  searchBtn,
  resultsField,
  myWatchlitBtn,
  findFilmBtn,
  first,
  second,
} from "./variables.js";

renderFromLocalStorage();

second.classList.add("hidden");

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const inpValue = searchInp.value;
  await renderMovies(inpValue);
  searchInp.value = "";
});

resultsField.addEventListener("click", onMovieClick);

myWatchlitBtn.addEventListener("click", function () {
  if (myWatchlitBtn.textContent === "My Watchlist") {
    myWatchlitBtn.textContent = "Find your film";
    findFilmBtn.textContent = "My Watchlist";

    second.classList.remove("hidden");
    first.classList.add("hidden");
  } else {
    myWatchlitBtn.textContent = "My Watchlist";
    findFilmBtn.textContent = "Find your film";

    first.classList.remove("hidden");
    second.classList.add("hidden");
  }
});
