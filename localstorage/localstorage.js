'use strict';

const logotype = document.getElementById('logotype');
const myAccount = document.getElementById('account');
const localStorageSection = document.getElementById('localstorage');

let parseMoviesFrom;
const parent = document.createElement('div');
let localContainer = document.getElementById('localContainer');

myAccount.addEventListener('click', (e) => {
    parent.textContent = '';
    doThisManyTimes()
});

const earthLogotype = function () {
    if ( global.style.display === 'block' || films.style.display === 'none' ) {
        global.style.display = 'none';
        films.style.display = 'block';
        localStorageSection.style.display = 'none'
    }
};

logotype.addEventListener('click', earthLogotype);

function doThisManyTimes() {
    if (localStorageSection.style.display !== 'block') {
        global.style.display = 'none';
        films.style.display = 'none';
        localStorageSection.style.display = 'block'
    }
        parent.textContent = '';
    if (localStorage.getItem('pushingMovie') === null || localStorage.pushingMovie.length === [] ) {
        document.getElementById('localContainer').textContent = 'There is no movies yet'
    } else {
        document.getElementById('localContainer').textContent = '';
        const getFrom = JSON.parse(localStorage.getItem('pushingMovie'))
        createFavoritepage(getFrom)
    }
};

function addToFav(oneMovieid) {
    const oneMov = newData.results.find(movieAt => +movieAt.id === +oneMovieid);
    let favoriteArr = [];

    if (localStorage.getItem('pushingMovie')){
     favoriteArr = JSON.parse(localStorage.getItem('pushingMovie'))
    }
    favoriteArr.push(oneMov)
    localStorage.setItem('pushingMovie',JSON.stringify(favoriteArr))
    favoriteBtn.style.display = 'none'
}

function createFavoritepage (someData) {
    someData.forEach(item => {
        create(item);
    });
    // вызов функции где мы "ищем" кнопку Unfavorite происходит после того как я построил весь список и создал все кнопки и все блоки
    someBodyOnceToldMe();

}

function create(data){
    const {poster_path, id, title, vote_average, release_date, overview} = data;
    const wrapMovieandText = document.createElement('div');
    wrapMovieandText.setAttribute('id', id)
    const someBlock = document.createElement('div');
    const forPoster = 'http://image.tmdb.org/t/p/w342' + poster_path;
    const unFavButton = document.createElement('button');
    const posterBlock = document.createElement('div');
    const poster = document.createElement('img');
    const favOverview = document.createElement('p');
    const favTitle = document.createElement('h1');
    someBlock.classList.add('description');
    poster.classList.add('cinemaPicture');
    poster.setAttribute('src', forPoster);
    poster.setAttribute('id', id);
    unFavButton.textContent = 'Unfavorite';
    unFavButton.classList.add('desUn');
    // нет атрибута UnId - бывает data-id, id и типа того.
    unFavButton.setAttribute('id', id + 10);
    posterBlock.classList.add('cinema');
    favOverview.classList.add('description__text');
    favOverview.textContent = overview;
    wrapMovieandText.classList.add('parent','space-between',);
    parent.append(wrapMovieandText);
    wrapMovieandText.append(posterBlock, someBlock);
    posterBlock.append(poster);
    someBlock.append( unFavButton, overview);
    localContainer.append(parent);
}

function someBodyOnceToldMe() {
    // цикл нужен для того чтобы перебрать все существующие кнопки Unfavorite которые есть
    for(let i = 0; i <= document.getElementsByClassName('desUn').length - 1; i ++){
        // ищу кнопку по индексу I
        let elem = document.getElementsByClassName('desUn')[i];
        // добавляю слушатель события клик
        elem.addEventListener('click', ()=> {
            // беру атрибу этой кнопки

            let attr = +elem.getAttribute('id');
            let newAttr = attr - 10;
            console.log(newAttr)
            // беру локальное хранилище - массив с фильмами
            let stored = JSON.parse(localStorage.getItem('pushingMovie'));
            // фильтрую и сохраняю в локальное хранилище массив без фильма
            document.getElementById(attr).remove()
            localStorage.setItem("pushingMovie", JSON.stringify(stored.filter(entry => entry.id !== newAttr)));
            // сломает страницу аккаунта - но почему - попробуй найти сам

            doThisManyTimes();
        });
    }
}
