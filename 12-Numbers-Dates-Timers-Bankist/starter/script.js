'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-01-10T17:01:17.194Z',
    '2024-01-15T23:36:17.929Z',
    '2024-01-16T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (d1, d2) =>
    Math.round(Math.abs((d2 - d1) / (1000 * 60 * 60 * 24)));
  // console.log(calcDaysPassed(new Date(), +date));
  const daysPassed = calcDaysPassed(new Date(), +date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

////////////////////////////////////////////////
/* ---------- Display layout */
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}
      </div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formatCur(
        mov,
        acc.locale,
        acc.currency
      )}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const outcomes = Math.abs(
    acc.movements.filter(mov => mov < 0).reduce((sum, mov) => sum + mov, 0)
  );
  labelSumOut.textContent = formatCur(outcomes, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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
  displayMovements(currentAccount);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0),
      sec = String(time % 60).padStart(2, 0);
    /* In each sec update the ui */
    labelTimer.textContent = `${min}:${sec}`;
    /* when 0 sec left, stop timerand logout */
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Login to get Started';
      containerApp.style.opacity = 0;
    }
    time--;
  };

  /* Set 5minutes */
  let time = 30;

  /* Call the timer every second */
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

let currentAccount, timer;

/* Experimentando aapi */
////////////////////////////////////////////////
/* ---------- Event handlers */
btnLogin.addEventListener('click', function (e) {
  /* Prevenir que recarrege a página */
  e.preventDefault();

  if (timer) clearInterval(timer);
  timer = startLogoutTimer();

  /* procurar o usuario */
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  /* Conferir 1 - se o usuario existe com ? e 2 - se o pin digitado está correto */
  if (currentAccount?.pin === +inputLoginPin.value) {
    /* Display header message */
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split()[0]
    }`;
    /* Criar a data atual */
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: '2-digit',
      // weekday: 'long',
    };
    const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
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

  const amount = +inputTransferAmount.value;
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
    /* Add tranfer day */
    currentAccount.movementsDates.push(new Date().toISOString());
    receiveAcc.movementsDates.push(new Date().toISOString());

    /* Update ui */
    updateUI(currentAccount);

    /* Reset timer */
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      /* Adicionar a transação */
      currentAccount.movements.push(amount);
      /* Add loan day */
      currentAccount.movementsDates.push(new Date().toISOString());
      /*  Atualiza a interface */
      updateUI(currentAccount);
      /* Reset timer */
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  /* Check if the credentials are corret. the username and the pin */
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
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
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/* 
console.log('---------- 171');
console.log(23 === 23.0);
console.log('   NOTE: numbers are only one type.');
console.log(0.1 + 0.2);
console.log('   NOTE: this happens because it is a binary');
console.log(0.1 + 0.2 === 0.3);

console.log('----- Coverting strings to numbers');
console.log(Number('23'));
console.log(+'23');

console.log('----- Parsing');
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('30px', 2));
console.log(Number.parseInt('e30', 10));

console.log(Number.parseFloat('  2.5mm'));
console.log(Number.parseInt('2.5mm'));

console.log('----- isNan');
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0));

console.log('----- isFinite');
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));
console.log('   NOTE: isFinite is better for checking if it is a number');

console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23.0 / 0));
 */
/* 
console.log('---------- 172');
console.log('----- raiz');
console.log(Math.sqrt(25), 25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log('----- maior el de um conjunto de num');
console.log(Math.max(5, 7, 3, 2, 6, 88, 86, 99));
console.log(Math.max(5, 7, 3, 2, 6, 88, '86', '99px'));
console.log(Math.max(5, 7, 3, 2, 6, 88, 86, '99'));
console.log('----- menor el de um conjunto de num');
console.log(Math.min(5, 10, 23, 11, 21));

console.log('----- constantes');
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log('----- Working with random');
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

console.log('----- Roufing integers');
console.log(Math.trunc(23.3));

console.log('--- round');
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log('--- ceil');
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log('--- floor');
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log('--- floor  !== trunc');
console.log(Math.trunc(-23.3), Math.floor(-23.3));

console.log('----- rouding decimals');
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

console.log(
  ' NOTE: boxing is transforming to an Number object, so y can call the methods.'
);
 */
/* 
console.log('---------- 173');
console.log('----- Reminder operator');
console.log(5 % 2, 5 / 2);
console.log(8 % 3, 8 / 3);

console.log('--- even or odd');
const isEven = n => n % 2 === 0;

console.log(isEven(0), isEven(23), isEven(432));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';

    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
 */
/* 
console.log('---------- 174');
const diameter = 207_460_000_000;

console.log(diameter);
console.log(
  '   NOTE: y can place the underscores to have a paramenter of how great the nu ber is'
);

const priceCents = 345_39;
console.log(priceCents);
console.log(
  '   NOTE: y can use to put a parameter of idea of cents or any other interpretation'
);

const tranferFee1 = 15_00;
const tranferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI);

console.log(Number('230_000'));
console.log(
  '   NOTE: y can only use _ in the code, y can not use in strings to be parsed'
);
 */
/* 
console.log('---------- 175');
console.log('--- The biggest number hat js can represent');
console.log(2 ** 53 - 1, Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 10);
console.log('   NOTE: using numbers bigger than this is not safe');

console.log('----- BigInt');
console.log(2353546345351346534756345351435n);
console.log(BigInt(1234345345));

console.log('--- operator with bigint');
console.log(100000n + 109000n);
console.log(12356466563421346567423546n * 2345465n);
const huge = 2344656745231335465n;
const num = 23;
console.log(huge * BigInt(num));
console.log('   NOTE: y canot mix Bigint with numbers');

console.log('--- exceptions of mixing bigint with numbers');
console.log(20n > 15);
console.log(20n === 20);
console.log(20n == '20');
console.log(typeof 20n);

console.log(huge + ' is really big');

console.log('--- divisions with bigint');
console.log(10n / 3n, 10 / 3);
 */

// console.log('---------- 176');
// console.log('----- create a date');
// const now = new Date();
// console.log(now);

// console.log(new Date('Jan 15 2024 21:24:04'));
// console.log(new Date('December 23, 2023'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2025, 10, 19, 12, 0));
// console.log(new Date(2025, 10, 33, 12, 0));

// console.log(new Date(0), 'The time js was theorically created');
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// console.log('----- working with dats');
// const future = new Date(2025, 10, 19, 12, 0);
// console.log(
//   future,
//   future.getFullYear(),
//   future.getMonth(),
//   future.getDate(),
//   future.getDay() /* acording to the week day */,
//   future.getHours(),
//   future.getMinutes(),
//   future.getSeconds(),
//   future.toISOString(),
//   future.getTime()
// );
// console.log(new Date(1763568000000));
// console.log(Date.now());

// future.setFullYear(2030);
// console.log(future);

/* console.log('---------- 177 + 178');
const future = new Date(2025, 10, 19, 12, 0);
console.log(+future);
const calcDaysPassed = (d1, d2) => Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(
  new Date(2025, 10, 19),
  new Date(2024, 10, 19, 12, 0)
);
console.log(days1); */
/* 
console.log('---------- 179 + 180');
const num = 235465.34;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGroping: false,
};
console.log('Us:  ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:  ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:  ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  'Browser:  ',
  new Intl.NumberFormat(navigator.language, options).format(num)
);
 */
/* 
console.log('---------- 181');
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is yr pizza boy!!!! with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('waiting for youuuu, to......');

setTimeout(() => console.log('   NOTE: js is asyncronous'), 3100);

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
 */
