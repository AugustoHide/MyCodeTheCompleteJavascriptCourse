'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////////////////////////
/* ---------- Display layout */
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}
      </div>
      <div class="movements__value">${mov} €</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

// const createUsername = function (user) {
//   return user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
// };

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};
// calcDisplaySummary(account1.movements);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

/* Fazer display do 
  1- movemntações, 
  2 - balanço da conta, 
  3 - resumoda conta */
const updateUI = function (currentAccount) {
  displayMovements(currentAccount.movements);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

let currentAccount;
////////////////////////////////////////////////
/* ---------- Event handlers */
btnLogin.addEventListener('click', function (e) {
  /* Prevenir que recarrege a página */
  e.preventDefault();
  /* procurar o usuario */
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  /* Conferir 1 - se o usuario existe com ? e 2 - se o pin digitado está correto */
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    /* Display header message */
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split()[0]
    }`;
    /* configurar para layout aparecer */
    containerApp.style.opacity = 100;
    /* Fazer display do 1- movemntações, 2 - balanço da conta, 3 - resumoda conta */
    updateUI(currentAccount);
    /* Limpar campos de login */
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  /* Check if there is money enogth  and if thre receiveacc exists, and if the amount is more then 0 */
  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    currentAccount.username !== receiveAcc?.username
  ) {
    /* Add negative to the current account */
    currentAccount.movements.push(-amount);
    /* Add positivce to the current account */
    receiveAcc.movements.push(amount);
    /* Update ui */
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    /* Adicionar a transação */
    currentAccount.movements.push(amount);
    /*  Atualiza a interface */
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  /* Check if the credentials are corret. the username and the pin */
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    /* Deletar conta */
    accounts.splice(index, 1);
    /* configurar para layout desaparecer */
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/* console.log('----------- aula 143');
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log('----- Slice');
console.log('   NOTE: .slice method retorna uma nova array com a sub array');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log('   NOTE: it is a way of making a copy of an array;');
console.log(arr.slice());

console.log('----- Splice');
// console.log(arr.splice(2), arr);
console.log(
  '----NOTE: splice alter the original array. It excludes de eleements specified'
);
// console.log(arr.splice(-1), arr);
console.log(arr.splice(-1), arr.splice(1, 2), arr);
arr = ['a', 'b', 'c', 'd', 'e'];

console.log('----- Reverse');
const arr2 = ['j', 'i', 'h', 'g', 'j', 'f'];
console.log(arr2.reverse(), arr2);

console.log('----- Concat');
const letters = arr.concat(arr2);
console.log(letters, [...arr, ...arr2]);

console.log('----- Join');
console.log(letters.join(' - ')); */

/* console.log('----------- aula 144');
console.log('----- at');
const arr = [22, 23, 64];
console.log(arr[0], arr.at(0));

console.log('----- Getting the last element of an array');
console.log(arr[arr.length - 1], arr.slice(-1)[0], arr.at(-1));
console.log('   NOTE: at helps get the last element without using array.lengh -1'); */

/* console.log('----------- aula 145');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement: ${i + 1}: You  deposited ${movement}`);
  } else {
    console.log(`Movement: ${i + 1}: You withdrew ${movement}`);
  }
}

console.log('----- forEach');
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement: ${i + 1}: You  deposited ${movement}`);
  } else {
    console.log(`Movement: ${i + 1}: You withdrew ${movement}`);
  }
});
console.log(
  '   NOTE: foreach calls the callback function with each element of the array. You can pass the element on the parameter of the function.'
);
console.log(
  '   NOTE: the first param is always the element, the second is the index, the third is the array'
); */

/* console.log('----------- aula 146');
console.log('----- forEach on maps');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log('----- forEach on sets');
const currenciesUnique = new Set(['USD', 'GPR', 'USD', 'EUR', 'EUR', 'REL']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
console.log(
  '   NOTE: n sets, the second param is the same of the first. It is the value.'
);
console.log('   NOTE: this is because sets do not have keys or index.'); */

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* const checkDogs = function (dogsJulia, dogsKate) {
  console.log('----- 1');
  const correctDogsJulia = dogsJulia.slice(1, -2);
  console.log('----- 2');
  const dogs = correctDogsJulia.concat(dogsJulia);
  dogs.forEach(function (dog, numDog) {
    const classification =
      dog >= 3
        ? `an adult, and is ${dog} years old`
        : 'still a puppy \u{1F436}';
    const str = `Dog number ${numDog + 1} is an ${classification}`;
    console.log(str);
  });
};

let julia = [3, 5, 2, 12, 7],
  kate = [9, 16, 6, 8, 3];
checkDogs(julia, kate);

julia = [9, 16, 6, 8, 3];
kate = [10, 5, 6, 1, 4];
checkDogs(julia, kate); */

/* console.log('----------- aula 145');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementUsd = movements.map(function (mov) {
  return mov * euroToUsd;
});
console.log(movements, movementUsd);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);

console.log(
  '   NOTE: the first aproach is more functional, there is a function that do the algorithm. In se cond it is more hard code.\n It is indicated to use the first aproacch, functional aproach.'
);

const movementsUSDArraw = movements.map(mov => mov * euroToUsd);
console.log(movementsUSDArraw);
console.log(
  '   NOTE: arraw functions are better for simple callback functions'
);

const movementsDescriptions = movements.map((movement, i) => {
  return `Movement: ${i + 1}: You ${
    movement > 0 ? 'deposit' : 'withdrew'
  } ${Math.abs(movement)}`;
});
console.log(movementsDescriptions);

console.log(
  '   NOTE: the map method calls the callback function for each ememnt of the array'
);
console.log(
  '   NOTE: map method do not have side effects on the original array'
); */

/* 
console.log('----------- aula 143');
console.log('----- Filter');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements, deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);
console.log(' NOTE: Y CANNOT USE FOR STRINGS');

const withdrawals = movements.filter(mov => mov < 0);
console.log(movements, withdrawals);
 */

/* 
console.log('----------- aula 145');
console.log('----- Reduce');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('   NOTE: accumulator is like a snowball');
console.log(
  '   NOTE: the second param of the reduce is the inial value of the accumulator'
);
// const balance = movements.reduce(function (accumulator, current, index, arr) {
//   console.log(`Iteration number ${index}: ${accumulator}`);
//   return accumulator + current;
// }, 0);
const balance = movements.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

console.log(
  '   NOTE: using the reduce method helps to use less variables. Therefor a more clean code'
);

console.log('----- Getting the maximum value');
const maximum = movements.reduce(
  (max, mov) => (max > mov ? max : mov),
  movements[0]
);
console.log(maximum); 
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/* 
const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((average, age, index, hAges) => average + age / hAges.length, 0);
  console.log(humanAges);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
 */

/* 
console.log('----------- aula 156');
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * euroToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

console.log(
  '   NOTE: using to much chain array methods can cause erformance issues. ALWAYS TRY TO REDUCE THE QUANTITY OF CHAINING FUNCTIONS'
);
console.log(
  '   NOTE: avoid using splice method or other methods that change the actuall array. THAT CAN CAUSE DIFICULT TO SOLVE BUGS.'
);
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/* 
console.log('----------- aula 157');

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements, firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let accountForOf = undefined;
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    accountForOf = acc;
    break;
  }
}
console.log(accountForOf);
 */
/* 
console.log('----------- aula 158 até 163');
console.log('------- SOME');
console.log('----- for equality');
console.log(movements, movements.includes(-130));

console.log('----- for condition');
console.log(
  movements,
  movements.some(mov => mov === -130)
);
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

console.log('------- EVERY');
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

console.log('------- separate callback');
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
console.log('   NOTE: this is good for not repating code');
 */
/* 
console.log('----------- aula 163');
console.log('----- flat method');
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat(), arr);

const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
console.log(arrDeep.flat());
console.log('   NOTE: flat just flat the first level of nested array');

console.log('----- flat with the level of nested');
console.log(arrDeep.flat(2));

console.log('----- discovering the overaalbalance of the bank');
const accountsMovements = accounts.map(acc => acc.movements);
console.log(accountsMovements);
const allMovements = accountsMovements.flat();
console.log(allMovements);
const overAllBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);

const overAllBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log('----- flatMap');
const overAllBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(
  '   NOTE: flatMspa only goes one level deep and you cannot change it'
);
 */
/* 
console.log('----------- aula 164');
console.log('----- with strings');
const owners = ['Jonas', 'Zach', 'Adam', 'Martin'];
console.log(owners.sort(), owners);

console.log('----- with numbers');
console.log(movements, movements.sort());
console.log('    NOTE: it converts to string and then it sort');

// console.log('--- ascending order');
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

console.log('--- ascending order');
movements.sort((a, b) => a - b);
console.log(movements);

// console.log('--- descending order');
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(movements);

console.log('--- descending order');
movements.sort((a, b) => b - a);
console.log(movements);
 */
/* 
console.log('----------- aula 165');
const arr = [1, 2, 3, 4, 5, 6, 7];

console.log('----- Empty array plus fill');
const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

console.log('----- Another way to create and fil an array using from methid');
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const rand = Array.from({ length: 100 }, () => Math.ceil(Math.random() * 100));
console.log(rand);

console.log(
  '   NOTE: from method creates an array and do the map method in one place'
);
labelBalance.addEventListener('click', function (e) {
  e.preventDefault();
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementUI);
}); */
/* 
console.log('----------- aula 167');
console.log('----- Ex 1');
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);
console.log('----- Ex 2');
// const deposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const deposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(deposits1000);

console.log('----- Ex 3');
const { deposits, withdralwals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdralwals += cur);
      sums[cur > 0 ? 'deposits' : 'withdralwals'] += cur;
      return sums;
    },
    { deposits: 0, withdralwals: 0 }
  );

console.log(deposits, withdralwals);

console.log('----- Ex 4');
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a title case'));
console.log(convertTitleCase('this is a title case'));
console.log(convertTitleCase('this is another title'));
console.log(convertTitleCase('and here this is another title'));
 */

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.



GOOD LUCK 😀
*/

/* TEST DATA: */
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// /* 1. */
// console.log('----- 1.');
// dogs.forEach(
//   dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
// );
// console.log(dogs);

// /* 2. */
// console.log('----- 2.');
// // const sarahDog = dogs.filter(dog => dog.owners.includes('Sarah'))[0];
// const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
// if (sarahDog.curFood >= sarahDog.recommendedFood * 1.1)
//   console.log("Sara's dog is eating too much");
// else if (sarahDog.curFood <= sarahDog.recommendedFood * 0.9)
//   console.log("Sarah's dog is eating too little");

// const eatingTooMuchLitle = function (dog, muchLittle = 'much') {
//   const { curFood, recommendedFood } = dog;
//   if (muchLittle === 'much') {
//     if (curFood >= recommendedFood) return true;
//     else return false;
//   } else if (muchLittle === 'little') {
//     if (curFood <= recommendedFood) return true;
//     else return false;
//   }
// };

// /* 3. */
// console.log('----- 3.');
// const ownersEatTooMuch = dogs
//   .filter(dog => eatingTooMuchLitle(dog))
//   .flatMap(dog => dog.owners);
// const ownersEatTooLittle = dogs
//   .filter(dog => eatingTooMuchLitle(dog, 'little'))
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch, ownersEatTooLittle);

// /* 4. */
// console.log('----- 4.');
// console.log(`${ownersEatTooMuch.join(' and ')}\'s eat too much`);
// console.log(`${ownersEatTooLittle.join(' and ')}\'s eat too little`);

// /* 5. */
// console.log('----- 5.');
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// const eatingOk = function (dog) {
//   const { curFood, recommendedFood } = dog;
//   return (
//     curFood <= recommendedFood + recommendedFood * 0.1 &&
//     curFood >= recommendedFood - recommendedFood * 0.1
//   );
// };

// /* 6. */
// console.log('----- 6.');
// console.log(
//   dogs.some(dog => eatingOk(dog)),
//   dogs
// );
// /* 7 */
// console.log('----- 7.');
// const dogsEatingOk = dogs.filter(dog => eatingOk(dog));
// console.log(dogsEatingOk);

// /* 8. */
// console.log('----- 8.');
// const compareRecommended = (dog1, dog2) =>
//   dog1.recommendedFood - dog2.recommendedFood;

// const dogsSoted = dogs.slice().sort(compareRecommended);
// console.log(dogsSoted);
