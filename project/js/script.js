/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(adds);
    
    // 2, 3) Switch 'comedy' genre to 'drama', change poster
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };

    makeChanges();
    
    
    // 4) create a list of movies on the web page, do alphabet sorting

    const sortArrOfStr = (arr) => {
        arr.forEach(item => {
            item = item.toUpperCase();
        });
        arr.sort();
    };
    


    
    const myMovieContainer =  document.querySelector('.promo__interactive-list');
    
    // function makes page movie list from sorted movieDB.movies array

    function addSortedMovies(movies, parent) {

        parent.innerHTML = '';
        sortArrOfStr(movies);
        movies.forEach((movie, i) =>{
            myMovieContainer.innerHTML += `<li class="promo__interactive-item">${i + 1} ${movie}
                <div class = 'delete'></div>
            </li>`;
        });

        // delete icon delets movie from the page and movieDB.movies array

        document.querySelectorAll('.delete').forEach((deleteIcon, i) => {
            deleteIcon.addEventListener('click', () => {
                deleteIcon.parentNode.remove();
                movieDB.movies.splice(i, 1);
                addSortedMovies(movies, parent); 
            });
        });

    }

    

    addSortedMovies(movieDB.movies, myMovieContainer);

      
    const btn = document.querySelector('button'),
    addInput = document.querySelector('.adding__input'),
    checkbox = document.querySelector('.add input[type=checkbox]');

// Make interactive form, that adds your movies to the page and movie array
    
    btn.addEventListener('click', (event) =>{
        event.preventDefault();
        let newFilm = addInput.value,
            favourite = checkbox.checked;

        if (newFilm) {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.slice(0,21)}...`;
            }

            movieDB.movies.push(newFilm);
            sortArrOfStr(movieDB.movies);
            addSortedMovies(movieDB.movies, myMovieContainer);

            if (favourite) {
                console.log('Добавляем любимый фильм');
            }

            // return empty input field
            addInput.value = '';
        }
    });

});