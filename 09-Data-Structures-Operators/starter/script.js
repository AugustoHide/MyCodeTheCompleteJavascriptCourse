'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.includes('Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(46);
  console.log(output);
}

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const str = document.querySelector('textarea').value;
//   const variables = [...str.split('\n')];
//   for (let [i, v] of variables.entries()) {
//     v = v.trim().toLowerCase();
//     const index_ = v.indexOf('_');
//     v =
//       v.slice(0, index_) +
//       v
//         .slice(index_ + 1)
//         .replace(v.slice(index_ + 1)[0], v.slice(index_ + 1)[0].toUpperCase());
//     v = v.padEnd(20, ' ').padEnd(21 + i, '\u2705'.repeat(i + 1));
//     console.log(v);
//   }
// });

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20h', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will bew delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(i1, i2, i3) {
//     console.log(`Here is your delicious pasta with ${i1},${i2},${i3}`);
//   },
//   orderPizza(mainIgredients, ...otherIngredients) {
//     console.log(mainIgredients);
//     console.log(otherIngredients);
//   },
// };

// console.log('   Strings 1');
// const airplane = 'TAP air Portugal';
// let plane = 'A320';

// console.log(plane[0], plane[1]);
// console.log('B737'[0]);

// console.log(airplane.length, plane.length);

// console.log(
//   airplane.indexOf('r'),
//   airplane.lastIndexOf('r'),
//   airplane.indexOf('Portugal'),
//   airplane.indexOf('portugal')
// );

// console.log(airplane.slice(4, 8));

// console.log(airplane.slice(0, airplane.indexOf(' ')));
// console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));
// console.log(airplane.slice(-2));
// console.log(airplane.slice(3, -1));

// console.log('   exercise');
// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   console.log(
//     s === 'B' || s === 'E' ? 'You got the middle seat' : 'You got lucky!'
//   );
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log('   strings behind the scene');
// console.log(
//   new String('augusto'),
//   typeof new String('augusto'),
//   typeof new String('augusto').slice(1)
// );

// console.log(airplane.toLowerCase(), airplane.toUpperCase());

// console.log('   fix capitaalization');
// const passenger = 'AuGuStO';
// const passengerCorrect =
//   passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
// console.log(passenger, passengerCorrect);

// console.log('   comparing emails');
// const email = 'helllo@email.com';
// const loginEmail = 'Hello@email.com \n';

// const NormalizeEmail = loginEmail.toLowerCase().trim();
// console.log(NormalizeEmail);

// console.log('   replacing parts of a string');
// const price = '288,97&';
// const priceUS = price.replace('&', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to border 23. Bording border 23';
// // console.log(announcement.replace('border', 'gate'));
// console.log(announcement.replace(/border/g, 'gate'));

// plane = 'Airbus A320ned';
// console.log('   booleans in strings');
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boarding'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('ned'))
//   console.log('Part of new Airbus family');

// const checkBaggage = function (itens) {
//   const baggage = itens.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on boarding');
//   } else {
//     console.log('Welcome abord!');
//   }
// };

// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// console.log('  split and join');
// console.log('a+very+nice+string'.split('+'));
// console.log('Augusto Hide Sakihama'.split(' '));
// const [firstName, , lastName] = 'Augusto Hide Sakihama'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizationNames = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizationNames('jessica ann smith davis');
// capitalizationNames('jonas schmidtmann');
// capitalizationNames('Augusto Hide SAKIHAMA');

// console.log('   padding');
// const message = 'Got to gate 23!';
// console.log(message.padStart(25, '_').padEnd(30, '+'));
// console.log('Augusto'.padStart(25, '_').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(235423465426784263));
// console.log(maskCreditCard('345267938462398562956239856238956'));

// console.log('   repeat method');
// const message2 = 'Bad weather... All departures delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'\u{1F6EB}'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(2);

// console.log('   Maps');
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze , Italy');
// console.log(rest.set(2, 'Lisboa, Portugal'));

// rest
//   .set('categories', [...restaurant.categories])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);

// console.log(rest.size);

// // console.log(rest.clear());

// rest.set([1, 2], 'Test');
// console.log(rest, rest.get([1, 2]));
// console.log(
//   '   NOTE: it does not worked because arrays are reference type. terefore it points to the memory adrees with the array, and not the array with the same values'
// );

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);
// console.log('    NOTE: this is a way of setting a Map');

// console.log('   covert obj to maps');
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log('   looping over maps');
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// console.log('   quiz');
// const answer = Number(prompt(`Your answer`));
// // console.log(
// //   answer === question.get('correct') ? question.get(true) : question.get(false)
// // );
// console.log(question.get(answer === question.get('correct')));

// console.log('   convert map to array');
// console.log([...question]);

// console.log('   components');
// console.log(
//   [...question.entries()],
//   [...question.keys()],
//   [...question.values()]
// );

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
// console.log(ordersSet);
// console.log(new Set());

// console.log('   discover size of set');
// console.log(ordersSet.size);

// console.log('   discover if it has a element');
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// console.log('   adding and deleting element to set');
// ordersSet.add('Bruschetta');
// ordersSet.add('Bruschetta');
// console.log(ordersSet);
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// console.log(
//   '   NOTE: there is no order in the set. THEREFORE THERE IS NO INDEX'
// );
// console.log('   NOTE: set is good to use when you dont have an order');

// console.log('   deleting all the elements');
// // ordersSet.clear();
// // console.log(ordersSet);

// console.log('   Iterating over a set');
// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Maneger', 'Waiter'];
// const jobs = [...new Set(staff)];
// console.log(jobs);

// console.log('   discovering the size f unique element s in a array');
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Maneger', 'Waiter']).size);

// console.log('   looping over objects');
// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// console.log('   NOTE: to put the object in a array format');
// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// console.log('   Optional chaining');
// console.log(restaurant.openingHours?.mon?.open);
// // console.log(restaurant.openingHours.mon.open);
// console.log(
//   `   NOTE: confere se a opção anterior a ? existe, se existir, ele continua a adentrar a no obj, se não, ele retorna undefined`
// );
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log('   optional chaning for methods');
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist');

// console.log('   optional chaning for arrays');
// const users = [{ name: 'Augusto', email: 'augusto@email.com' }];
// console.log(users[1]?.name ?? 'User array empty');

// console.log('   Enhanced objects');
// console.log(restaurant);

// console.log('   looping arrays');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// // console.log(...menu.entries());

// const rest1 = {
//   name: 'Capri',
//   numGuest: 0,
// };
// const rest2 = {
//   name: 'Capri',
//   owner: 'Giovanni Rosi',
// };

// // rest1.numGuest = rest1.numGuest || 10;
// // rest2.numGuest = rest2.numGuest || 10;
// console.log('   OR ASSIGMENT OPERATOR');
// // rest1.numGuest ||= 10;
// // rest2.numGuest ||= 10;
// console.log('   NULLISHY ASSIGMENT OPERATOR');
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// console.log('   AND ASSIGNMENT OPERATOR');
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// console.log('   nullsh op');
// restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 10;
// console.log(guest);

// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// console.log('   NOTE: nullysh values are null and undefined');

// console.log('   sort circuting');
// console.log('----- OR -----');

// console.log(
//   '   NOTE: if the first value is a trutthy value than, the first value is returned. \n So it will return the first truthy value'
// );
// console.log(3 || 'augusto');
// console.log('' || 'augusto');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello ' || 23 || null);

// console.log(
//   '   NOTE: se a primeira opção for igual a condição pode-se usar ||'
// );
// restaurant.numGuest = 0;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);
// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// console.log('----- AND -----');
// console.log(0 && 'augusto');
// console.log(7 && 'augusto');
// console.log('Hello' && 23 && null && 'augusto');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// console.log('   rest operator');
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// console.log('   rest op in objects');
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// console.log('   rest on functions');
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(2, 3, 4, 5, 6);
// add(2, 3, 7, 8, 9, 0, 6, 5, 4, 3);
// const x = [5, 9, 8, 7];
// add(...x);
// console.log(
//   '   NOTE: rest op pode ajudar nas contruções de funçoes que se tem definido dinamicamente o número de parametros'
// );
// restaurant.orderPizza('calabresa', 'onion', 'cheese', 'tomates');
// restaurant.orderPizza('bacon');

// console.log('   The spread operator');
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// console.log('   How to copy array and add element to array');
// const mainMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(mainMenu);

// console.log('   How to copy arrays');
// const mainMenuCopy = [...restaurant.mainMenu];

// console.log('   How to join 2 or more arrays into one');
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// console.log('   Iterables are arrays, strings, sets NOT obj');
// const str = 'Augusto';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1"),
// //   prompt("Let's make pasta! Ingredient 2"),
// //   prompt("Let's make pasta! Ingredient 3"),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// console.log('   spread with objects');
// const newRestaurant = { ...restaurant, founder: 'Jaquin', foundedIn: 1995 };
// console.log(newRestaurant);

// console.log('   using spread to cpoy obj LITERALLLY');
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Roma';
// console.log(restaurant.name, restaurantCopy.name);

// console.log('   Destructuring on obj functions');
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Rua Madureira, 11',
//   mainIndex: 2,
//   starterIndex: 0,
// });
// restaurant.orderDelivery({
//   address: 'Via Del Soto, 666',
// });

// console.log('   Destructuring parts of object');
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// console.log('   Renaming parts of destructured object');
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// console.log('   Default values on obj destructuring');
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// console.log('   Mutating variables with obj values');
// let a = 111,
//   b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// console.log('   Nested obj');
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4, 5];
// const [x, y, z] = arr;
// console.log(x, y, z, arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// console.log('   Switching values');
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log('   Destructuring for returning alues from functions');
// // console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// console.log('   Destructuring from nested elements');
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// console.log('   Defaut value');
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// console.log('---- 1');
// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${player}`);
// }

// console.log('---- 2');
// let sum = 0;
// let odds = Object.values(game.odds);
// for (const odd of odds) {
//   sum += odd;
// }
// console.log(`Average odd is ${sum / odds.length}`);

// console.log('---- 3');
// let oddsEntries = Object.entries(game.odds);

// for (const [index, value] of oddsEntries) {
//   console.log(
//     `Odd of ${index !== 'x' ? 'victory ' : 'draw'}${
//       index !== 'x' ? game[index] : ''
//     }: ${value}`
//   );
// }

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// console.log(`---- 1`);
// // const players1 = game.players[0],
// //   players2 = game.players[1];
// const [players1, players2] = [...game.players];
// console.log(players1, players2);

// console.log(`---- 2`);
// const [gk, ...fieldpPlayers] = players1;
// console.log(gk, fieldpPlayers);

// console.log(`---- 3`);
// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

// console.log(`---- 4`);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// console.log(`---- 5`);
// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// console.log(`---- 6`);
// function printGoals(...goalsPlayers) {
//   for (let i = 0; i < goalsPlayers.length; i++) {
//     console.log(goalsPlayers[i]);
//   }
//   console.log(goalsPlayers.length);
// }
// printGoals(...game.scored);
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// console.log(`---- 7`);
// team1 < team2 && console.log('Team1 is more likely to win');
// team2 < team1 && console.log('Team2 is more likely to win');

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// console.log(' 1.');
// // const events = new Set([...gameEvents]);
// // const events = new Set([...gameEvents.values()]);
// const events = [...new Set([...gameEvents.values()])];
// console.log(events);

// console.log('   2.');
// gameEvents.delete(64);
// console.log(gameEvents);

// console.log('   3.');
// let average = [...gameEvents.keys()].pop() / gameEvents.size;
// console.log(`An event happened, on average, every ${average} minutes`);

// console.log('   4.');
// for (const [key, value] of gameEvents) {
//   console.log(`[${key <= 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key}: ${value}`);
// }
