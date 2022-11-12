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

// 20 урок

if (4==9) {
    console.log('Ok!');
}

if (4==4) {
    console.log('Ok!');
}

if (4==4) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

if (4==9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

if (4) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error!');


switch (num) {
    case 49:
        console.log('неправильно');
        break;
    case 100:
        console.log('неправильно');
        break;
    case 50:
        console.log('в точку!');
        break;
    default:
        console.log('не в цей раз!');
        break;
}
