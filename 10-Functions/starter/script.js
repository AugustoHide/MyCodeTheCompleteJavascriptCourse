'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassegers = 1,
//   price = 199 * numPassegers
// ) {
//   const booking = {
//     flightNum,
//     numPassegers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 890);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// console.log('       a way to skip parameters send to the calling function');
// createBooking('LH123', undefined, 1000);

// console.log('---------- Aula 129');
// const flight = 'LH123';
// const augusto = {
//   name: 'Augusto Sakihama',
//   passport: 1342353464576568,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   passenger.passport === 1342353464576568
//     ? alert('Check in')
//     : alert('Wrong passport!');
// };

// checkIn(flight, augusto);
// console.log(flight, augusto);

// const newPassport = function (pearson) {
//   pearson.passport = Math.trunc(Math.random() * 1000000000);
// };
// newPassport(augusto);
// checkIn(flight, augusto);

// console.log('---------- Aula 131');
// const oneWorld = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// console.log('       higher-order function');
// const transformer = function (str, fn) {
//   console.log(str);
//   console.log(`Transfomed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWorld);

// console.log('       Js uses callbacks all the time!!');
// const high5 = function () {
//   console.log('\u{1F450}');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Eddie'].forEach(high5);

// console.log('       NOTE: callback function allow us to use eusable code');
// console.log(
//   '       NOTE: is also good to acreate abstraction and hide details of certain parts of the code. That can be used to separate work in a group of programmers'
// );

// console.log('---------- Aula 132');
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Augusto');
// greeterHey('Daniel');

// greet('Hello')('Daniel');

// // const greetArraw = greeting =>
// //   function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// const greetArraw = greeting => name => console.log(`${greeting} ${name}`);
// greetArraw('HI')('Daniel');

// console.log('---------- Aula 133');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LM',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} hooked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(239, 'Daniel Da Silva');
// lufthansa.book(635, 'Augusto Hide');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // book(23, 'Augusto');
// console.log(
//   '       NOTE: this is a way of using methos of others classes with others classes with the this keyword pointed at.'
// );
// book.call(eurowings, 23, 'Daniel ');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Maria da Posa');
// console.log(lufthansa);

// const swissAirlines = {
//   airline: 'Swiss Air Line',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swissAirlines, 666, 'Maria Foi pro Brejo');
// console.log(swissAirlines);

// console.log('       Aply method');
// const flightData = [565, 'George Conão'];
// book.apply(swissAirlines, flightData);
// console.log(swissAirlines);

// book.call(swissAirlines, ...flightData);

// console.log('---------- Aula 134');
// console.log('       Bind method');
// const bookBW = book.bind(eurowings);
// const bookBLH = book.bind(lufthansa);
// const bookSW = book.bind(swissAirlines);
// bookBW(23, 'Stephen King');
// console.log(eurowings);
// console.log(
//   '       NOTE: bind is for using a method of a class with the this keyword pointet to other class'
// );
// console.log(
//   '       NOTE: uma maneir de setar por padrão determinados parametros'
// );
// console.log('       NOTE: isso se chama partial aplication');
// const bookW23 = book.bind(eurowings, 23);
// bookW23('Augusto Hide');
// bookW23('Fernando Gilbert');

// console.log('       With event listeners');
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// console.log(
//   '       NOTE: in this case this keyword points to the dom element that the function is calling'
// );
// lufthansa.buyPlane();
// console.log(
//   '       NOTE: The bind method returns anther function. While the call method executes the function with the this keyword pointed at the class in the parameter'
// );
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// console.log('     Bind in partial aplications');
// const addTax = (rate, value) => value + value + rate;
// console.log(addTax(8.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRetF = rate => value => 2 * value + rate;
// console.log(addTaxRetF(0.23)(100));
// const addVAT2 = addTaxRetF(0.23);
// console.log(addVAT2(100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // const answer = Number(
//     //   prompt(
//     //     'What is your favourite programming language?\n0: JavaScript \n1: Python \n2: Rust \n3: C++ \n(Write option number)'
//     //   )
//     // );
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     // if (answer !== NaN && answer >= 0 && answer <= 3) {
//     //   this.answers[answer]++;
//     // }
//     answer !== NaN &&
//       answer >= 0 &&
//       answer <= this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if ('array'.valueOf() === type.valueOf()) {
//       console.log(this.answers);
//     } else if ('string'.valueOf() === type.valueOf()) {
//       //   console.log(
//       //     `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
//       //   );
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// console.log('---------- Aula 136');
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();
// console.log('Imediatly invoked expression. Generaly run just once');
// (function () {
//   console.log('This will never run again');
// })();
// console.log('   Array function version of IIE');
// (() => console.log('This will never run again'))();

// console.log(
//   '   NOTE: this is good to hide varibles of vlasses to protect acssess.'
// );

// console.log('   NOTE: var is not good for data privacy');
// {
//   var notPrivate = 23;
// }
// console.log(notPrivate);

// console.log('---------- Aula 137');
// console.log('   Closure');

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.log(
//   '   NOTE: a closure makes the execution of the code remeber the execution context already gone n its creation'
// );
// console.log(
//   '   NOTE: a function has access to variable envireoment of the execution cxontext in witch it was created'
// );
// console.log('   NOTE: Var enviroment is attached to the function');
// console.log('   NOTE: closure is first in priority over the scope chain');

// console.dir(booker);

// console.log('   NOTE: we can not alter closures, we can only observe.');

// console.log('---------- Aula 138');
// console.log('   Exempla 1');
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// h();
// f();
// console.dir(f);

// console.log('   Exempla 2');
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`Thera are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(100, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  header.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

console.log(
  `the header does not have problem because, even after the finalization of execution of the iife, he closure saves de variable enviroment, in this case, the header const.`
);
