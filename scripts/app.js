const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieReleaseDate = document.querySelector('.userInputReleaseDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieReleaseToDisplay = document.querySelector('.favouriteMovieReleaseDate');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let releaseDateInStorage = localStorage.getItem('releaseDate');

if(titleInStorage && imageUrlInStorage && releaseDateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(56, 56, 77, 0.658), rgba(73, 48, 48, 0.678)),
    url('${imageUrlInStorage}')`;
    movieReleaseToDisplay.textContent = releaseDateInStorage;
}





btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let ReleaseDateInput = movieReleaseDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('releaseDate', ReleaseDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(56, 56, 77, 0.658), rgba(73, 48, 48, 0.678)),
    url('${posterUrlInput}')`;
    movieReleaseToDisplay.textContent = ReleaseDateInput;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieReleaseDate.value = '';
});