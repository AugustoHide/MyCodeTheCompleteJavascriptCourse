'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive`);

// const interface = 'Audio';
// const private = 234;

// console.log(`Aula 33`);

// function logger() {
//     console.log(`My name is Augusto`);
// }
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const juice = fruitProcessor(5, 6);
// console.log(juice);
// console.log(fruitProcessor(5, 6));
// console.log(fruitProcessor(3, 90));

// console.log(`Aula 34`);

// const age1 = calcAge1(1995);
// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(1995);

// console.log(age1, age2);

// console.log(`Aula 35`);

// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }

// const calcAgeFunction = birthYear => 2023 - birthYear;
// console.log(calcAgeFunction(1995));

// const yearsTilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsTilRetirement(1995, 'Augusto'));
// console.log(yearsTilRetirement(2003, 'Daniel'));

// console.log(`Aula 36`);

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const OrangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${OrangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// console.log(`Aula 37`);

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const yearsTilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement <= 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return -1;
//     }
//     console.log(`${firstName} retires in ${retirement} years`);

//     return retirement;
//     //return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsTilRetirement(1995, 'Augusto'));
// console.log(yearsTilRetirement(1950, 'Mike'));

// console.log(`Deasfio`);

// function calcAverage(num1, num2, num3) {
//     return (num1 + num2 + num3) / 3;
// }

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(5, 54, 49);

// // const scoreDolphins = calcAverage(85, 54, 91);
// // const scoreKoalas = calcAverage(23, 34, 27);
// // console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


// console.log(`Aula 39`);

// const friends = ['Michael', 'Sphen', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1992, 1993, 1994, 1995);
// // console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Augusto';
// const augusto = [firstName, 'Sakihama', 2023 - 1995, 'Repositor', friends];
// console.log(augusto);

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const years = [1991, 1995, 2001, 2003, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// console.log(`Aula 40`);

// const friends = ['Michael', 'Sphen', 'Peter'];
// const newLength = friends.push('Daniel');
// console.log(friends, newLength);

// friends.unshift('John');
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(friends, popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Sphen'));
// console.log(friends.indexOf('Michael'));

// friends.push(23);
// console.log(friends.includes('Bob'));
// console.log(friends.includes('Sphen'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// if (friends.includes('Michael')) {
//     console.log('A friend Peter')
// }

// console.log(`Desafio`);

// function calcTip(billValue) {
//     return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// }

// const bills = [];
// bills.push(125);
// bills.push(555);
// bills.push(44);
// console.log(bills);

// const tips = [];
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
// }
// console.log(tips);

// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//     totals.push(bills[i] + tips[i]);
// }
// console.log(totals);


// console.log(`Aula 42 + 43`);

// const augusto = {
//     firstName: `Augusto`,
//     lastName: `Sakihama`,
//     age: 2023 - 1995,
//     job: `Repositor`,
//     friends: [`Daniel`, `Augusto`]
// };
// console.log(augusto, augusto.lastName, augusto[`lastName`]);

// const nameKey = 'Name';
// console.log(augusto['first' + nameKey]);
// console.log(augusto['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Augusto? Chose between firstName, lastName, age, job, friends');
// // console.log(interestedIn);
// if (augusto[interestedIn]) {
//     console.log(augusto.interestedIn, augusto[interestedIn]);
// } else {
//     console.log('Wrong request');
// }
// augusto.location = 'Brasil';
// augusto['instargam'] = '@augustohs';
// console.log(augusto);

// //Challenge
// console.log(`${augusto.firstName} has ${augusto.friends.length} friends, and his best friend is called ${augusto.friends[0]}`);

// console.log(`Aula 44`);

// const augusto = {
//     firstName: `Augusto`,
//     lastName: `Sakihama`,
//     birthYear: 1995,
//     job: `Repositor`,
//     friends: [`Daniel`, `Augusto`],
//     hasBriversLicense: false,

//     calcAge: function () {
//         // console.log(this);
//         this.age = 2023 - this.birthYear
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasBriversLicense ? 'a' : 'no'} drive's license`;
//     }
// };
// console.log(augusto.calcAge(1995));
// // console.log(augusto['calcAge'](1995));
// // console.log(augusto.age);
// // console.log(augusto.age);
// // console.log(augusto.age);

// console.log(augusto.getSummary());

// console.log(`Exercício de programação 7`);

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
// }

// console.log(`Aula 46 + 47`);

// // for (let rep = 1; rep <= 10; rep++) {
// //     console.log(`Lifting weights repetition ${rep}`);
// // }

// const augusto = [
//     `Augusto`,
//     `Sakihama`,
//     2023 - 1995,
//     `Repositor`,
//     [`Daniel`, `Augusto`],
//     true
// ];

// const augustoTypes = [];
// for (let i = 0; i < augusto.length; i++) {
//     console.log(augusto[i], typeof augusto[i]);
//     // augustoTypes[i] = typeof augusto[i];
//     augustoTypes.push(typeof augusto[i]);
// }
// console.log(augustoTypes);

// const years = [1991, 1995, 2003, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

// console.log('Continue Only strings')
// for (let i = 0; i < augusto.length; i++) {
//     if (typeof augusto[i] !== 'string') continue;
//     console.log(augusto[i], typeof augusto[i]);
// }
// console.log(augustoTypes);

// console.log('Break')
// for (let i = 0; i < augusto.length; i++) {
//     if (typeof augusto[i] === 'number') break;
//     console.log(augusto[i], typeof augusto[i]);
// }
// console.log(augustoTypes);

// console.log(`Aula 48`);

// const augusto = [
//     `Augusto`,
//     `Sakihama`,
//     2023 - 1995,
//     `Repositor`,
//     [`Daniel`, `Augusto`],
//     true,
//     false
// ];

// // for (let i = augusto.length - 1; i >= 0; i--) {
// //     console.log(i, augusto[i]);
// // }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------- Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} Lifting weght repetition ${rep}`);
//     }
// }

// console.log(`Aula 49`);
// // for (let rep = 1; rep <= 10; rep++) {
// //     console.log(`Lifting weights repetition ${rep}`);
// // }
// // let rep = 1;
// // while (rep <= 10) {
// //     console.log(`While: Lifting weights repetition ${rep}`);
// //     rep++;
// // }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`ou rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is about to end...`);
// }

console.log(`Exercício de programação 8`);
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

/* Write your code below. Good luck! 🙂 */
const bills = [];
bills.push(22);
bills.push(295);
bills.push(176);
bills.push(440);
bills.push(37);
bills.push(105);
bills.push(10);
bills.push(1100);
bills.push(86);
bills.push(52);

const tips = [], totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals, calcAverage(totals));