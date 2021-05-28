'use strict';

const logotype = document.getElementById('logotype');
const myAccount = document.getElementById('account__btn');
const localStorageSection = document.getElementById('localstorage');
const favoriteArr = [];
let parseMoviesFrom;

function addToFav (movieObj) {
    const oneMov = newData.results.find((item) => {
        return item.id === +movieObj
    } )
        favoriteArr.push(oneMov)
        localStorage.setItem('res', JSON.stringify(favoriteArr))
    // if (movieObj.id === bId) {
    //
    //
    // }
}

 // {
//     localStorageSection.innerHTML = '';
//     element.forEach((item, index) => {
//       const {id, poster_path, overview, title} = item;
//       const pictureUrlLink = 'http://image.tmdb.org/t/p/w342' + poster_path;
//       const blockWithMovie = document.createElement('div');
//       const pictureInBlock = document.createElement('img');
//       const parentForAll = document.createElement('div');
//       const movieDescription = document.createElement('div');
//       const buttonToAdd = document.createElement('btn');
//       const movieDescriptionTitle = document.createElement('h2');
//       const movieDescriptionText = document.createElement('p');
//       blockWithMovie.classList.add('cinema');
//       pictureInBlock.classList.add('cinema__picture');
//       parentForAll.classList.add('about');
//       movieDescription.classList.add('description');
//       buttonToAdd.classList.add('description__favorite')
//       buttonToAdd.textContent = 'Add to favorite';
//       // movieDescriptionTitle.classList.add('')
//       movieDescriptionText.classList.add('description__text');
//       pictureInBlock.setAttribute('src', pictureUrlLink);
//       movieDescriptionText.textContent = overview;
//       blockWithMovie.append(pictureInBlock);
//       movieDescription.append(buttonToAdd, movieDescriptionText);
//       parentForAll.append(blockWithMovie, movieDescription);
//       localStorageSection.append(parentForAll);
//       unfavoriteMovie(buttonToAdd, parseMoviesFrom, newData)
//
//   })
// }






