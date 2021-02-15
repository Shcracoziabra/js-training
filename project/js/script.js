/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// 1) Deleting addvertisements

const addsDiv = document.getElementsByClassName('promo__adv')[0];
const adds = addsDiv.querySelectorAll('img');

adds.forEach(item => {
    item.remove();
});

// 2) Switch 'comedy' genre to 'drama'
const myPoster = document.querySelector('.promo__bg');
const myGenre = myPoster.querySelector('.promo__genre').textContent = 'драма';
console.log(myGenre);

// ---------3) Change poster background

myPoster.style.backgroundImage = "url('img/bg .jpg')";

// 4) create a list of movies on the web page, do alphabet sorting

const myMovieList = document.querySelectorAll('.promo__interactive-item');
const myListContent = [];
for(let i=0; i < movieDB.movies.length; i++){
    myListContent[i] = movieDB.movies[i].toUpperCase();
} 
myListContent.sort();
console.log(myListContent);


for(let i=0; i < myListContent.length; i++){
    myMovieList[i].textContent = myListContent[i];
} 

const myMovieContainer =  document.querySelector('.promo__interactive-list');
myMovieContainer.innerHTML = '';

myListContent.forEach((film, i) =>{
    myMovieContainer.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
        <div class = 'delete'></div>
    </li>`;
});