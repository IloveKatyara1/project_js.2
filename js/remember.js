"use strict";

const gameNumber = +prompt('скільки ігор ви зіграли?')

const personalGameDB = {
    count: gameNumber,
    games: {},
    company: {},
    genres: [],
    privat: false
};

const a = prompt('в яку ігру ви останій раз зіграли?'),
      b = +prompt ('на скільки ви її оцінете? (від 1 до 10)'),
      c = prompt('в яку ігру ви останій раз зіграли?'),
      d = +prompt ('на скільки ви її оцінете? (від 1 до 10)');

personalGameDB.games[a] = b;
personalGameDB.games[c] = d;

console.log(personalGameDB);


// next

if (4 === 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

if (4 === 4) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 31;

// if (num > 20) {
//     console.log('багато!');
// } else if (num < 20) {
//     console.log("мало!");
// } else {
//     console.log('GJ!');
// }

switch (num) {
    case 19:
        console.log('на один більше');
        break;
    case 21:
        console.log('на один менше');
        break;
    case 20:
        console.log('молодчинка');
        break;
    default:
        console.log('не правильно');
        break;
}


// next

// const hamburger = 3,
//       fries = 3,
//       cola = 2,
//       milk = 2;

// if (hamburger => 2 && fries > 3 && cola > 2 && milk) {
//     console.log('ми наїлися!');
// } else {
//     console.log('ресторан гавно');
// }


const hamburger = 3,
      fries = 1,
      cola = 2,
      milk = 2;

if (hamburger => 2 && fries > 3 || cola > 2 && milk) {
    console.log('ми наїлися!');
} else {
    console.log('ресторан гавно');
}


// next

let number = 40;

// while (number <= 50) {
//     console.log(number);
//     number++;
// }

do {
    console.log(number);
    number++;
}
while (number < 55);

// for (let i = 1; i < 10; ++i) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// next

for (let i = 0; i < 5; ++i) {
    console.log(i);
    for (let j = 1; j < i; ++j) {
        console.log(j);
    }
}


let result = '';
const leught = 10;

for (let i = 0; i < leught; ++i) {
    for (let j = 1; j < i; ++j) {
        result += '*';
    }
    result += '\n';
}

console.log(result);

// 1 < 3


// 1
// 1,2 вирішення
// 1,2,3
// 1,2,3,4
// 1,2,3,4,5

for (let i = 0; i < 5; ++i) {
    console.log(`first level: ${i}`);
    for (let j = 0; j < 4; ++j) {
        console.log(`second level ${j}`);
        for (let k = 0; k < 3; ++k) {
            console.log(`trird level ${k}`);
        }
    }
}