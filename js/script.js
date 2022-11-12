// "use strict";

// const numberOfFilms = +prompt("Скільки фільмів ви продивилися?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt("один із останіх продивлених фільмів", ''),
//       b = +prompt ('на скільки оціните його? (від 1 до 10)', ''),
//       c = prompt("один із останіх продивлених фільмів", ''),
//       d = +prompt ('на скільки оціните його? (від 1 до 10)', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// // homework

// const companyName = 'Fast Mechanism';

// const FastMechanismArchive = {
//     collaborators: ['Nazar', 'Maks', 'Nazar'],
//     asks: {},
//     employeesAreAccepted: false,
// };

// const e = prompt('чи ви хочетепрацювати в нашуй компанії?'),
//       f = prompt('чим ви будете корисний нашій компанії'),
//       g = prompt('як давго ви хочете працювати в нашуй компанії?'),
//       h = prompt('всім привіт');

// FastMechanismArchive.asks[e] = f;
// FastMechanismArchive.asks[g] = h;

// console.log(FastMechanismArchive);

// // 20 урок

// if (4==9) {
//     console.log('Ok!');
// }

// if (4==4) {
//     console.log('Ok!');
// }

// if (4==4) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// if (4==9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// if (4) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// // if (num < 49) {
// //     console.log('Error!');
// // } else if (num > 100) {
// //     console.log('много');
// // } else {
// //     console.log('Ok!');
// // }

// // (num === 50) ? console.log('Ok!') : console.log('Error!');


// switch (num) {
//     case 49:
//         console.log('неправильно');
//         break;
//     case 100:
//         console.log('неправильно');
//         break;
//     case 50:
//         console.log('в точку!');
//         break;
//     default:
//         console.log('не в цей раз!');
//         break;
// }

// // homework

// const number = 0;

// if (number < 10) {
//     console.log('ти шо далбайоб?');
// } else if (number > 10) {
//     console.log('поменше число блять баран');
// } else {
//     console.log('харош ти не даун');
// }

// const abc = 'abc';

// switch (abc) {
//     case 'abc':
//         console.log('харош ти не даун не то шо Міша блять');
//         break;
//     case 'adc':
//         console.log('ти шо даун не знаєш алфавіта?');
//         break;
//     case 'cba':
//         console.log('далбайоб наоборот');
//         break;
// }


// 21 lesson

// const hamburger = true,
//       fries = true;

// if (hamburger && fries) {
//     console.log('я наївся');
// } else {
//     console.log('не має одного із інгриндієнтів');
// }

// const hamburger = true,
//       fries = false;

// if (hamburger && fries) {
//     console.log('я наївся');
// } else {
//     console.log('не має одного із інгриндієнтів');
// }


// const hamburger = 5,
//       fries = 0;

// if (hamburger && fries) {
//     console.log('я наївся');
// } else {
//     console.log('не має одного із інгриндієнтів');
// }

// console.log((hamburger && fries));

// const hamburger = 5,
//       fries = 5,
//       cola = 3;

// console.log(hamburger > 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'gdlkfgkfd');
// console.log(5 && 'ksljdfhlgk');
// console.log(null && 'kdlsjfnklng');
// console.log(null && 0 && 'dsafdeg');

// if (hamburger > 3 && cola && fries) {
//     console.log('ми наїлися');
// } else {
//     console.log('ми ідемо у вас немає того чого ми хочемо');
// }

// const hamburger = 5,
//       fries = 0,
//       cola = 0;

// if (hamburger || cola || fries) {
//     console.log('ми раді');
// } else {
//     console.log('ми ідемо у вас немає того чого ми хочемо');
// }

// const hamburger = 0,
//       fries = 0,
//       cola = 0;

// if (hamburger || cola || fries) {
//     console.log('ми раді');
// } else {
//     console.log('ми ідемо у вас немає того чого ми хочемо');
// }

// console.log(hamburger || cola || fries);

// const hamburger = 0,
//       fries = null,
//       cola = 0;

// if (hamburger || cola || fries) {
//     console.log('ми раді');
// } else {
//     console.log('ми ідемо у вас немає того чого ми хочемо');
// }

const hamburger = 3,
      fries = 3,
      cola = 0,
      nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('ми раді');
} else {
    console.log('ми ідемо у вас немає того чого ми хочемо');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);

console.log(!1);


// homework

console.log( NaN || 2 || undefined );

console.log( NaN && 2 && undefined );

console.log( 1 && 2 && 3 );

console.log( !1 && 2 || !3 );

console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
