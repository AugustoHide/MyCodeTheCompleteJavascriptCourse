'use strict';

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear, this);
// };
// calcAge(1995);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear, this);
// };
// calcAgeArrow(2003);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(2023 - this.year, this);
//   },
// };
// const matilda = {
//   year: 2007,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();
// var year = 2023;
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(2023 - this.year, this, arguments);
//     // function isMillenial() {
//     //   console.log(this.year >= 1986);
//     // }
//     // isMillenial();
//     const isMillenial = () => {
//       console.log(this.year >= 1986, arguments);
//     };
//     isMillenial(1, 2, 3, 4, 5, 6);
//   },
//   calcAgeArrow: () => {
//     console.log(2023 - this.year, this);
//   },
// };
// jonas.calcAgeArrow();
// jonas.calcAge(9, 8, 7, 6);

let lastName = 'Sakihama';
let oldLastName = lastName;
lastName = 'Da Silva';
console.log(oldLastName, lastName);

const augusto = {
  nome: 'Augusto',
  age: 27,
};
const friend = augusto;
friend.age = 28;
console.log('friend', friend);
console.log('augusto', augusto);

//Copying obj
const augusto2 = {
  nome: 'Augusto',
  lastName: 'Sakihama',
  age: 27,
  family: ['Pai', 'mãe'],
};
const AugustoCopy = Object.assign({}, augusto2);
AugustoCopy.lastName = 'Da Silva';
console.log(augusto2.lastName, AugustoCopy.lastName);

AugustoCopy.family.push('Mery');
console.log(augusto2, AugustoCopy);
