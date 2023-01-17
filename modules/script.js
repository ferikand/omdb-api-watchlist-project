import { renderMovies } from "./utils.js";
import { searchInp, searchBtn, addToWatchListElements } from "./variables.js";

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  // getting input value
  const inpValue = searchInp.value;

  await renderMovies(inpValue);

  // НУЖНО ПОЛУЧИТЬ ЭЛЕМЕНТЫ, КОТОРЫЕ ПОЯВЯТСЯ ПОСЛЕ ВЫПОЛНЕНИЯ ФЦНКЦИИ В ДЕВЯТОЙ СТРОКЕ, то есть нужно получить ноде-лист из хтмл єлементов, но, почему то получается пустой нод лист
  await showNodeList();

  searchInp.value = "";
});

async function showNodeList() {
  console.log(document.querySelectorAll("#addto-watchlist"));
}
