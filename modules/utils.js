import { myId, resultsField } from "./variables.js";

let imdbIdArr = [];

function getHtml(data) {
  return `
  <div class="movie">
    <div class="poster">
      <img src="${data.Poster}" alt="movie poster" />
    </div>
    <div class="movie-info">
      <h3 id='movie-title'>${data.Title}</h3>
      <img src="images/icons/star-icon.png" alt="star icon" />
      <p class="rating">${data.Ratings[0].Value}</p>
      <div class="infoline">
          <p class="duration">${data.Runtime}</p>
          <p class="genre">${data.Genre}</p>
          <div id="addto-watchlist">
            <img src="images/icons/add-icon.png" alt="add sign icon" />
            <p>Watchlist</p>
          </div>
        </div>
        <p class="description">${data.Plot}</p>
    </div>
  </div>
`;
}

async function renderMovies(inpValue) {
  resultsField.innerHTML = "";
  // getting imdbIDs and put them into imdbIdArr
  await fetch(`http://www.omdbapi.com/?s=${inpValue}&apikey=${myId}`)
    .then((res) => res.json())
    .then((data) => (imdbIdArr = data.Search.map((el) => el.imdbID)));

  // getting list of movies by IDs from imdbIdArr
  imdbIdArr.forEach((el) => {
    fetch(`http://www.omdbapi.com/?i=${el}&apikey=${myId}`)
      .then((res) => res.json())
      .then((data) => (resultsField.innerHTML += getHtml(data)));
  });
}

export { renderMovies };
