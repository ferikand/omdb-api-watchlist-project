import { renderMovies, renderFromLocalStorage, onMovieClick } from "./utils.js";
import { searchInp, searchBtn, resultsField } from "./variables.js";

renderFromLocalStorage();

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const inpValue = searchInp.value;
  await renderMovies(inpValue);
  searchInp.value = "";
});

resultsField.addEventListener("click", onMovieClick);
