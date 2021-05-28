'use strict';

 const API_ADRESS = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=';
 let page = 1;
 const DEFAULTAPIPAGE = API_ADRESS + page;
 let newData;
 let changeByForEach;
 let changeSomething
 let hideElementsArr = [];
 const movies = document.querySelector('.movies');

 function getData(url) {
     return fetch(url)
 }

 function createMovies(someData) {
      movies.innerHTML = '';
     changeByForEach = newData.results.forEach(movie => {

         createPosters(movie)
     })
 }

 function createPosters(someData) {
     const {poster_path, id, title} = someData;
     const image = document.createElement('img');
     const movieTitle = document.createElement('h1');
     const movieBlock = document.createElement('div');
     const posterURL = 'http://image.tmdb.org/t/p/w342' + poster_path;
     movieBlock.classList.add('movie');
     image.classList.add('moviePicture');
     image.setAttribute('alt', title);
     image.setAttribute('id', id);
     image.dataset.id = id;
     if (poster_path === null) {
         image.setAttribute('src', './img/stranger.png');
     } else {
         image.setAttribute('src', posterURL);
     }
     movieTitle.textContent = title;
     movieBlock.appendChild(image, movieTitle);
     movieBlock.addEventListener('click', modalSwitcher);
     movies.appendChild(movieBlock);
 }

 /* first function */

 getData(DEFAULTAPIPAGE).then(resp => resp.json()).then(data => {
     newData = data;
     createMovies(newData)
      createButtons(1, newData)
 });
