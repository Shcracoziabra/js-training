/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* 'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;  

console.log(personalMovieDB);*/

//Hometask 2

// 1 and 2
/*for (let i = 0; i < 2; i++) {

    let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    if (a !=='' && b !=='' && a !== null && b !== null && a.length <= 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}
console.log(personalMovieDB.movies);*/

// 3
/*
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30){
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
*/
// 4.1

/*let num = 0;

while (num < 2) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    if (a !=='' && b !=='' && a !== null && b !== null && a.length <= 50) {
        personalMovieDB.movies[a] = b;
    } else {
        num--;
    }
    num++;
}

console.log(personalMovieDB.movies); */

// 4.2
/*
let num = 0;

do {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    num++;

    if (a !=='' && b !=='' && a !== null && b !== null && a.length <= 50) {
        personalMovieDB.movies[a] = b;
    } else {
        num--;
    }
} 
while (num < 2);

console.log(personalMovieDB.movies);
*/
// Hometask 3
 // 1
'use strict';
/*let numberOfFilms;

function start(){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}


start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);
*/
/*
function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {

        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    
        if (a !=='' && b !=='' && a !== null && b !== null && a.length <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
    console.log(personalMovieDB.movies);
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

// 2.1
function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } 
}

showMyDB();
// 2.2 function with argument

function showMyDB(hidden) {
    if (!hiden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);

*/
// 3
/*function writeYourGenres() {
    let num = 0;
    while (num < 3) {
        personalMovieDB.genres[num] = prompt(`Ваш любимый жанр под номером ${num + 1}.`, '');
        num++;
    }
    console.log(personalMovieDB.genres);
}

writeYourGenres();
*/
// Hometask 4

//1
/*
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a !=='' && b !=='' && a !== null && b !== null && a.length <= 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } 
    },
    writeYourGenres: function (){
        let num = 0;
        while (num < 3) {
            personalMovieDB.genres[num] = prompt(`Ваш любимый жанр под номером ${num + 1}.`, '');
        
            if (personalMovieDB.genres[num] !== '' && personalMovieDB.genres[num] != null) {
                
            } else {
                num--;
            }
            num++;
        }
        console.log(personalMovieDB.genres);
    }
};




//2
personalMovieDB.toggleVisibleMyDB = function(){
    if (personalMovieDB.privat){
        personalMovieDB.privat = false;
    } else {
        personalMovieDB.privat = true;
    }
    console.log(`personalMovieDB.privat is ${personalMovieDB.privat}`);
};

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();

//3 personalMovieDB.writeYourGenres method is changed in the object.

personalMovieDB.writeYourGenres();

personalMovieDB.genres.forEach((genre, i) => {
    console.log(`Любимый жанр #${i + 1} - это ${genre}`);
});
*/
// from decimal to binary
