'use strict';
// console.log('------------ aula 209 + 210');
// console.log(
//   '       NOTE: arrowFyunction não functionam para construtores. Isso pq eles não tem o this keyword'
// );
// const Pearson = function (firstName, birthYear) {
//   /* Propriedades das instâncias */
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   //   this.calcAge(){
//   //     console.log(2024 - this.birthYear);
//   //   }
// };

// const augusto = new Pearson('Augusto', 1995);
// console.log(augusto);

// // 1. cria um obj vazio
// // 2. função é chamada e o this aponta para o novo obj vazio criado
// // 3. o novo obj é linkado ao prototipo
// // 4. a função retorna o novo obj criado
// const mathilda = new Pearson('Mathilda Jamaica', 1988);
// const jack = new Pearson('Jack Jubileu', 1999);
// console.log(mathilda, jack);

// console.log(augusto instanceof Pearson);
// // console.log(jay instanceof Pearson);

// console.log('       NOTE: constructors are a tool to simulate and use oop');

// console.log('----- Prototype');

// Pearson.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };
// console.log(Pearson.prototype);
// console.log(
//   '       NOTE: the prototype methods are in the prototype, and not in the individual obj. So there are no copies therefore obj reuse the code'
// );
// augusto.calcAge();
// mathilda.calcAge();
// jack.calcAge();

// console.log('       NOTE: each obj have acces to the methosd on the prototype');

// console.log(augusto.__proto__);
// console.log(augusto.__proto__ === Pearson.prototype);
// console.log(
//   '       NOTE: pEARSON.PROTOTYPE IS THE PART THAT YOU ARE CGOIG TO USE, NOT THE PROTOTYPE IT SELF'
// );
// console.log(Pearson.prototype.isPrototypeOf(augusto));
// console.log(Pearson.prototype.isPrototypeOf(mathilda));
// console.log(Pearson.prototype.isPrototypeOf(jack));
// console.log(Pearson.prototype.isPrototypeOf(Pearson));
// console.log(
//   '       NOTE: this proves that Pearson.prototype is not the prototype itself it is the part of prototype'
// );

// Pearson.prototype.species = 'Homo sapiens';
// console.log(augusto, mathilda);

// console.log(augusto.hasOwnProperty('firstName'));
// console.log(augusto.hasOwnProperty('species'));

// console.log('----- Prototype chain');
// console.log(augusto.__proto__);
// console.log('--- Obj.prototype');
// console.log(augusto.__proto__.__proto__);
// console.log(augusto.__proto__.__proto__.__proto__);

// console.dir(Pearson.prototype.constructor);

// const arr = [2, 3, 4, 4, 5, 6]; /* new Array */
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x * 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Accelerate ${this.make}: New speed is ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Brake ${this.make}: New speed is ${this.speed}`);
// };

// const bmw = new Car('BMW', 120);
// bmw.accelerate();
// bmw.brake();
// bmw.brake();

// const mercedes = new Car('Mercedes', 95);
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();

// console.log('------------- aula 214');
// console.log('----- Classes');
// console.log('---class expresssion');
// const PearsonCl = class {};

// console.log('---class declaration');
// class Pearson {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   /* This is gonna be on the protype */
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
//   get age() {
//     return 2024 - this.birthYear;
//   }
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }
// const jessica = new Pearson('Jessica Davis', 1986);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ === Pearson.prototype);

// Pearson.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// console.log('   NOTE: class hide the prototypal inheritance');
// console.log('   CLASSES ARE NOT HOISTED');
// console.log(
//   '   CLASSES ARE FIRST-CLASS CITIZENS: YOU CANSS THEM INTO FUNCTIONS'
// );
// console.log('   CLASSES ARE EXECUTED IN STRICT MODE ALWAYS');

// console.log('------------- aula 215');
// const account1 = {
//   owner: 'Augusto',
//   movements: [1200, 23, 2356, 467],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
//   get age() {
//     return 2024 - this.birthYear;
//   },
// };
// console.log(account1.latest);

// account1.latest = 50;
// console.log(account1.movements);

// const augusto = new Pearson('Augusto Hide', 1995);

// // Pearson.hey = function () {
// //   console.log('Hey there!');
// //   console.log(this);
// // };
// Pearson.hey();
// // augusto.hey();

// const PearsonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PearsonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 1999;
// steven.calcAge();

// const sarah = Object.create(PearsonProto);
// sarah.init('Sarah', 1978);
// sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/* class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Accelerate ${this.make}: ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`Brake ${this.make}: ${this.speed}`);
  }
}
// const bmw = new Car('BMW', 120);
// bmw.accelerate();
// bmw.brake();

// const mercedes = new Car('Mercedes', 95);
// mercedes.accelerate();
// mercedes.brake();

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
console.log(ford.speedUS); */

// console.log('----------------- aula 219');
// const Pearson = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Pearson.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Pearson.call(this, firstName, birthYear);
//   this.course = course;
// };
// console.log(
//   '   NOTE: VC DEVE FAZER oBJ,CREATE PQ VC NÃO DEVE TER O MESMO PROTOTIPO DO PAI, E SIM HERDAR O PROTOTIPO DO PAI PARA PODER FAZER SUAS ALTERAÇÕES'
// );
// // Student.prototype = Pearson.prototype
// Student.prototype = Object.create(Pearson.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2003, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Pearson);
// console.log(mike instanceof Object);

// console.dir(Student.prototype.constructor);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Accelerate ${this.make}: New speed is ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Brake ${this.make}: New speed is ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 90);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(24); */

// console.log('------------------- aula 221');
// class PearsonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   /* This is gonna be on the protype */
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
//   get age() {
//     return 2024 - this.birthYear;
//   }
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// class StudentCl extends PearsonCl {
//   constructor(fullName, birthYear, course) {
//     /* Always call the super first */
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${2024 - this.birthYear} years old, but I feel more like ${
//         2024 - this.birthYear + 20
//       }`
//     );
//   }
// }
// const martha = new StudentCl('Martha Jones', 2012, 'Biology');
// console.log(martha);
// martha.introduce();
// martha.calcAge();
/* 
console.log('----------------- aula 222');
const PearsonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PearsonProto);

const StudentProto = Object.create(PearsonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PearsonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jao = Object.create(StudentProto);
jao.init('Jão', 2002, 'Música');
jao.introduce();
jao.calcAge();
 */

// console.log('----------------- aula 223 + 224 + 225 + 226 + 227');
// //Public fields
// //Private field
// //Public methods
// //Private methods
// //static

// class Account {
//   //Public fields
//   locale = navigator.language;
//   //Private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this.movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks for opening an account ${this.owner}`);
//   }
//   /* PUBLIC INTERFACE: this is better then manipulate properties outsifde the obj */
//   /* This is called API */
//   //Public methods
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(value) {
//     this.#movements.push(value);
//     return this;
//   }
//   withdrawal(value) {
//     this.deposit(-value);
//     return this;
//   }
//   _aproveLoan(value) {
//     return true;
//   }
//   requestLoan(value) {
//     if (this._aproveLoan(value)) {
//       this.deposit(value);
//       console.log('Loan Aproved');
//       return this;
//     }
//   }
//   static helper() {
//     console.log('Helper');
//   }
// }

// const acc1 = new Account('Augusto', 'REAL', 21000);
// console.log(acc1);
// // /* This way of adding valoues tendes to bugs */
// // acc1._movements.push(250);
// // acc1._movements.push(-1000);
// acc1.deposit(250);
// acc1.withdrawal(140);
// acc1.requestLoan(1000);
// // console.log(acc1.getMovements());
// // console.log(acc1.movements);
// // console.log(acc1.pin);
// // // console.log(acc1.#approvedLoan(100));
// // Account.helper();

// console.log('----- Chaining');
// acc1
//   .deposit(300)
//   .deposit(5000)
//   .withdrawal(1000)
//   .requestLoan(25000)
//   .withdrawal(4000);

// console.log(acc1.getMovements());

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Accelerate ${this.make}: New speed is ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Brake ${this.make}: New speed is ${this.speed}`);
    return this;
  }
}
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

class EVCl extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate();
rivian.brake().brake().brake().brake().brake().accelerate().chargeBattery(100);
console.log(rivian.charge);
