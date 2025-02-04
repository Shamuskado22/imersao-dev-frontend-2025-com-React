const searchInput = document.querySelector('#search-input');
const resultsArtists = document.querySelector('#result-artist');
const resultsPlaylist = document.querySelector('#result-playlist');

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  resultsPlaylist.classList.add('hidden')
  const artistName = document.querySelector('#artist-name');
  const artistImg = document.querySelector('#artist-image');

  result.forEach(element => {
    artistName.innerHTML = element.name;
    artistImg.src = element.urlImg;
  });

  resultsArtists.classList.remove('hidden');
}

document.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resultsPlaylist.classList.add('hidden');
    resultsArtists.classList.remove('hidden');
    return;
  }

  requestApi(searchTerm);
})