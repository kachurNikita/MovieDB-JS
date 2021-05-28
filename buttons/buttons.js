 'use strict';

 const pagesBtn = document.getElementById('pages');
 const btnFirst = document.createElement('div');
 const btnPrev = document.createElement('div');
 const btnNext = document.createElement('div');
 const btnLast = document.createElement('div');

 btnFirst.textContent = 'First';
 btnPrev.textContent = 'Prev';
 btnNext.textContent = 'Next';
 btnLast.textContent = 'Last';

 btnFirst.setAttribute('id', 'firstBtn');
 btnPrev.setAttribute('id', 'prevBtn');
 btnNext.setAttribute('id', 'nextBtn');
 btnLast.setAttribute('id', 'lastBtn');

 btnFirst.classList.add('pages__item');
 btnPrev.classList.add('pages__item');
 btnNext.classList.add('pages__item');
 btnLast.classList.add('pages__item');

// First page
function onFirstPage() {
 page = 1;
 const URL = API_ADRESS + page;
 getData(URL).then(resp => resp.json()).then(data => {
  newData = data;
  createButtons(page, newData)
  createMovies(newData);
 })
}

 // Prev page

function onPrevPage () {
 const currentPage = page - 1;
 if (currentPage < 1) {
  return;
 }
  page--;
  const URL = API_ADRESS + page;
  getData(URL).then(resp => resp.json()).then(data => {
   newData = data;
   createButtons(page, newData)
   createMovies(newData);
  })
}

 // Next page

 function onNextPage () {
  const {total_pages} = newData;
  const currentPage = page + 1;
  if(currentPage > total_pages) {
   return
  }
  page++;
  const URL = API_ADRESS + page;
  getData(URL).then(resp => resp.json()).then(data => {
  newData = data;
   createButtons(page, newData)
   createMovies(newData);
  })
 }

 //Last page

  function  onLastPage () {
  const{total_pages} = newData;
  page = total_pages;
  const totalPages = API_ADRESS + page;
  getData(totalPages).then(resp => resp.json()).then(data => {
  newData = data;
  createButtons(page-4, newData)
  createMovies(newData);
  });
 }

 btnNext.addEventListener('click', onNextPage);
 btnFirst.addEventListener('click', onFirstPage);
 btnPrev.addEventListener('click', onPrevPage);
 btnLast.addEventListener('click', onLastPage);

 function createButtons (id, data) {
 const{total_pages} = data;
  if(id > total_pages) {
   return
  }
  pagesBtn.textContent = '';
  pagesBtn.append(btnFirst, btnPrev);
  for(let i = id; i <= id+4; i++) {
   const pagItem = document.createElement('div');
   pagItem.classList.add('pages__item');
   pagItem.setAttribute('id', i);
   pagItem.textContent = i;
   pagesBtn.append(pagItem);
   getPagination(pagItem)
   if(i === id+4) {
    pagesBtn.append(btnNext, btnLast);
   }
  }
 }

 function getPagination (pagItem) {
  pagItem.addEventListener('click', (e) => {
   const{target:{id}} = e;
   page = id;
   getData(API_ADRESS + id).then(resp => resp.json()).then(data => {
    newData = data;
    createMovies(newData)
    createButtons(+id, newData)
   });
  })
 }
 

