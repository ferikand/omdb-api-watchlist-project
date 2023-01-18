const myId = '5a80a0bc';

const searchInp = document.querySelector('#search-inp');
const searchBtn = document.querySelector('#search-button');
const resultsField = document.querySelector('#results');
const addToWatchListElements = document.querySelectorAll(
  '#addto-watchlist'
);

const toggleIcon = movie => {
  if (
    movie.getAttribute('src') ===
    'images/icons/add-icon.png'
  ) {
    movie.setAttribute(
      'src',
      'images/icons/remove-icon.png'
    );
  } else {
    movie.setAttribute('src', 'images/icons/add-icon.png');
  }
};

const onMovieClick = e => {
  console.log('target', e.target);
  if (e.target.classList[0] === 'addto-watchlist__icon') {
    const currentMovie = e.target;
    toggleIcon(currentMovie);
  }
};

resultsField.addEventListener('click', onMovieClick);

export {
  myId,
  searchInp,
  searchBtn,
  resultsField,
  addToWatchListElements,
};
