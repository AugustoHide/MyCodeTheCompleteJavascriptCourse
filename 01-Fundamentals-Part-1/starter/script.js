// console.log('Aula 11');

// let js = 'amazing';
// console.log('Augusto');
// //console.log(40 + 3);

// let firstName = 'Matilda';
// let first_name;

// // console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// //Variable name conventtions
// let _new, name;
// let PI = 3.4223;

// let myFirstJob = 'Programmer';
// let myLastJob = 'Teacher';
// /*
// let job1;
// let job2;
// */
// console.log('coment');

// if (true) console.log(true);
// let jsIsFun = true;
// console.log(jsIsFun);

// console.log(typeof true); // result is a string describing the typr
// console.log(typeof jsIsFun);
// // console.log(typeof PI);
// // console.log(typeof firstName);

// jsIsFun = 'Yes';
// console.log(typeof jsIsFun);

// let year;
// console.log(year, typeof year);

// year = 1995;
// console.log(year, typeof year);
// console.log(typeof null);

// console.log('Aula 12');
// let age = 40;
// age = 41; // mutated the variable, reassign the variable

// const birthYear = 1995;
// // birthYear = 1999;

// // const não pode ser vazio
// // const job;

// //const pode ajudar a não ter bugs

// var job = 'programmer';
// job = 'student';

// lastName = 'Sakihama'; // Isso é uma propriedade no Object
// console.log(lastName, typeof lastName);

// console.log('Aula 13');

// const now = 2023;
// const ageAugusto = now - 1995;
// const ageDaniel = now - 2003;
// console.log(ageAugusto, ageDaniel);

// console.log(ageAugusto + 2, ageAugusto / 2, 2 ** 3);

// const firstName = 'Augusto';
// const lastName = 'Sakihama';
// console.log(firstName + ' ' + lastName);

// //Assigment ope
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageAugusto > ageDaniel);
// console.log(ageDaniel >= 18);

// const isFullAge = ageDaniel >= 18;

// console.log(now - 1995 > now - 2003);

// console.log('Aula 14');

// const now = 2023;
// const ageAugusto = now - 1995;
// const ageDaniel = now - 2003;
// console.log(now - 1995 > now - 2003);
// console.log(ageAugusto, ageDaniel);

// let x = y = 25 - 10 - 3;
// console.log(x, y, typeof x, typeof y);



// const averageAge = (ageAugusto + ageDaniel) / 2;
// console.log(ageAugusto, ageDaniel, averageAge);


// console.log('Aula 17');

// const firstName = "Augusto";
// const job = 'Repositor';
// const birthYear = 1995, now = 2023;

// const augusto = "I'm " + firstName + ', a ' + (now - birthYear) + ' ' + job + '!';
// console.log(augusto);

// const augustoNew = `I'm ${firstName}, a ${now - birthYear} ${job}!`;
// console.log(augustoNew);

// console.log(`Backticks ...`);

// console.log('String with \n\
// multiple\n\
// lines');

// console.log(`String with
// multiple
// lines`);

// console.log('Aula 18');

// const age = 15;
// const isOldEnogth = age >= 18;

// if (age >= 18) {
//     console.log('Daniel can start driving');
// } else {
//     console.log(`Daniel wait another ${18 - age} years`);
// }

// const birthYear = 1995; let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);


// console.log('Aula 18');

// //type conversion
// const inputYear = '1995';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Augusto'), typeof NaN);

// console.log(String(23), 23);

// //type coortion
// console.log('I am ' + 23);
// console.log('I am ' + '23');
// console.log('23' + '10' + 3);
// console.log('23' ** '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// console.log('Aula 21');

// //falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Augusto'));
// console.log(Boolean(0));
// console.log(Boolean(''));

// const money = 10;
// if (money) {
//     console.log("Don't spend it all!!")
// } else {
//     console.log("You should get a job!!!");
// }
// let height = 0;
// if (height) {
//     console.log(`Height is Defined!`);
// } else {
//     console.log(`Height is undefined!!`);
// }

// console.log('Aula 22');

// const age = 18;
// //type coortion
// if (age === '18') console.log(`You just became adult strict`);
// if (age == '18') console.log(`You just became adult loose`);

// const favourite = Number(prompt("What1s your favourite number?"));
// console.log(favourite, typeof favourite);

// if (favourite == 23) {
//     console.log(`23 is an amzing nunber`);
// }
// if (favourite === 23) {
//     console.log(`23 is an amzing nunber`);
// } else if (favourite === 7) {
//     console.log(`7 is a cool number`);
// } else {
//     console.log(`number is not 23 or 7`)
// }

// if (favourite !== 23) console.log(`Why not 23!`);

// console.log('Aula 24');

// const hasDriversLicense = true;
// const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Daniel is able to drive`);
// } else {
//     console.log(`Someone else should drive`);
// }

// const scoreDolphins = (97 + 86 + 101) / 3;
// const scoreKoalas = (109 + 95 + 89) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) console.log(`Dolphins win the trophy`);
// else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) console.log(`Koalas win the trophy`);
// else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) console.log(`Both win the trophy`);
// else console.log(`No one wins the trophy!`);

// console.log('Aula 27');
// const day = prompt(`Day of the week`);

// switch (day) {
//     case 'monday':
//         console.log(`Plan week`);
//         console.log(`Go to coding planner`);
//         break;
//     case 'tuesday':
//         console.log(`Prepare theory videos`);
//         break;
//     case 'yesterday':
//     case 'thursday':
//         console.log(`Write code study`);
//         break;
//     case 'friday':
//         console.log(`Record video`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend`);
//         break;
//     default:
//         console.log(`Not a week day`);
// }

// console.log('Aula 28');


// const age = 23;
// age >= 18 ? console.log('I like wine') : console.log('I like watter');

// const drink = age >= 18 ? 'I like wine' : 'I like watter';
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'I like wine' : 'I like watter'}`);

