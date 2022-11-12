"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви продивилися?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("один із останіх продивлених фільмів", ''),
      b = +prompt ('на скільки оціните його? (від 1 до 10)', ''),
      c = prompt("один із останіх продивлених фільмів", ''),
      d = +prompt ('на скільки оціните його? (від 1 до 10)', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// homework

const companyName = 'Fast Mechanism';

const FastMechanismArchive = {
    collaborators: ['Nazar', 'Maks', 'Nazar'],
    asks: {},
    employeesAreAccepted: false,
};

const e = prompt('чи ви хочетепрацювати в нашуй компанії?'),
      f = prompt('чим ви будете корисний нашій компанії'),
      g = prompt('як давго ви хочете працювати в нашуй компанії?'),
      h = prompt('всім привіт');

FastMechanismArchive.asks[e] = f;
FastMechanismArchive.asks[g] = h;

console.log(FastMechanismArchive);
