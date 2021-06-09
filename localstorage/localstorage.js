'use strict';

const logotype = document.getElementById('logotype');
const myAccount = document.getElementById('account__btn');
const localStorageSection = document.getElementById('localstorage');
const favoriteArr = [];
let parseMoviesFrom;
const parent = document.createElement('div');
const localContainer = document.getElementById('localContainer');
let storageArray = [];

myAccount.addEventListener('click', (e) => {
    parent.textContent = ''
    if (global.style.display === 'block' || films.style.display === 'block') {
        global.style.display = 'none'
        films.style.display = 'none'
        localStorageSection.style.display ='block'
    } if (localStorage.getItem('pushingMovie') === null) {
      alert('There is no movie yet, please add a movie')
    } else {
        const getFrom = JSON.parse(localStorage.getItem('pushingMovie'))
        createFavoritepage(getFrom)
    }
});

const earthlogotype = function () {
    if ( global.style.display === 'block' || films.style.display === 'none' ) {
        global.style.display = 'none'
        films.style.display = 'block'
        localStorageSection.style.display = 'none'
    }
};

logotype.addEventListener('click', earthlogotype)

function addToFav(oneMovieid) {
    const oneMov = newData.results.find(movieAt => +movieAt.id === +oneMovieid);
   const addToWhatWeHave =  favoriteArr.push(oneMov)
    const toLocalStorage = localStorage.setItem('pushingMovie',JSON.stringify(favoriteArr))
};

function createFavoritepage (someData) {
    let whatWeGet = []
         whatWeGet = someData.forEach(item => {
      create(item)
    })
};

function create(data){
    const {poster_path, id, title, vote_average, release_date, overview} = data;
    const wrapMovieandText = document.createElement('div')
    const someBlock = document.createElement('div')
    const forPoster = 'http://image.tmdb.org/t/p/w342' + poster_path;
    const unFavButton = document.createElement('button')
    const posterBlock = document.createElement('div')
    const poster = document.createElement('img')
    const favOverview = document.createElement('p')
    const favTitle = document.createElement('h1')
    someBlock.classList.add('description')
    poster.classList.add('cinemaPicture')
    poster.setAttribute('src', forPoster)
    poster.setAttribute('id', id)
    unFavButton.textContent = 'Unfavorite';
    unFavButton.classList.add('desUn');
    unFavButton.setAttribute('UnId', id)
    posterBlock.classList.add('cinema');
    favOverview.classList.add('description__text')
    favOverview.textContent = overview;
    wrapMovieandText.classList.add('parent','space-between',)
    parent.append(wrapMovieandText)
    wrapMovieandText.append(posterBlock, someBlock)
    posterBlock.append(poster)
    someBlock.append( unFavButton, overview)
    localContainer.append(parent)
    changeToArray()
};

function changeToArray () {
    const fvbtn = document.getElementsByClassName('desUn')
    const toArr = Array.from(fvbtn)
    toArr.forEach(item => {
       const takeId =  item.getAttribute('UnId')
       item.addEventListener('click', workPlease(takeId))
    })
}

function workPlease (id) {
        const someFromLocalStorage = JSON.parse(localStorage.getItem('pushingMovie'))
        const storageArray =  someFromLocalStorage.filter((item, index, arr) => {
            return item.id !== id
       })
}

function deleteOneMov(someItem) {
   storageArray = someItem
}