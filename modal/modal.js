 'use strict';

const slider = document.querySelector('.slider');
const buttonBack = document.querySelector('.slider__back');
const global = document.querySelector('.global');
const films = document.querySelector('.films');
const description = document.getElementById('desc');
const about = document.getElementById('about');
const modalWindow = document.getElementById('modal-window');
const descList = document.getElementById('descriptionList');
const cinema = document.createElement('div');
const cinemaPicture = document.createElement('img');
const cinemaTitle = document.createElement('h1');
const favoriteBtn = document.createElement('button');
const score = document.createElement('div');
const releaseDate = document.createElement('div');
const descText = document.createElement('p');
const nextMovie = document.createElement('p');
const background = document.createElement('img');
const content = document.querySelector('.content');

function modalSwitcher () {
    if(global.style.display = 'none') {
        films.style.display = 'none';
        global.style.display = 'block';
    }
}

 function nextMovies() {
     nextMovie.addEventListener('click', () => {
         removeEventListener('click',movies);
         const doStep = document.querySelector('.slider__next').getAttribute('step');
          newData.results.forEach((item, index)=>{
              if(index === +doStep) {
                  createModal(item, ++index, index)
              }
          })
     })
 }

buttonBack.addEventListener('click', () => {
    if( global.style.display == 'block') {
        global.style.display = 'none';
        films.style.display = 'block';
    }
})

movies.addEventListener('click', (e) => {
    const {target:{dataset:{id}}} = e;
    const newId = id;
    getDataAndId(newData.results, newId);
})

 function getDataAndId(data, someId) {
    let singleArr = data.forEach((item, index) => {
        if(item.id === +someId) {
          createModal(item,++index, index);
        }
    })
 }

function createModal (data, index, adIndex) {
    const {poster_path, id, title, vote_average, release_date, overview} = data;
    const posterURL = 'http://image.tmdb.org/t/p/w342' + poster_path;
    favoriteBtn.setAttribute('movieId', id);
    nextMovie.setAttribute('step', index);
    nextMovie.classList.add('slider__next');
    descText.classList.add('description__text');
    releaseDate.classList.add('description__item');
    score.classList.add('description__item');
    cinema.classList.add('cinema');
    background.classList.add('background');
    cinemaPicture.classList.add('cinema__picture');
    cinemaTitle.classList.add('description__title');
    favoriteBtn.classList.add('description__favorite');
    score.textContent = vote_average;
    releaseDate.textContent = release_date;
    descText.textContent = overview;
    cinemaTitle.textContent = title;
    favoriteBtn.textContent = 'Add to favorite';
    nextMovie.textContent = 'Next movie';
    background.setAttribute('src', posterURL);
    cinemaPicture.setAttribute('src', posterURL);
    cinemaPicture.setAttribute('id', id);
    if (poster_path === null) {
        cinemaPicture.setAttribute('src', './img/stranger.png');
        background.setAttribute('src', './img/stranger.png');
    }
    about.prepend(cinema);
    modalWindow.append(background);
    descList.append(score, releaseDate);
    cinema.append(cinemaPicture);
    description.append(descText);
    slider.append(nextMovie);
    description.prepend(favoriteBtn);
    nextMovies();
    favoriteBtn.addEventListener('click', (e) => {
        console.log(e.target)
    })
}





