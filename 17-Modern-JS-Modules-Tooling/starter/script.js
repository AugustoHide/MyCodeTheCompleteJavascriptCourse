import 'core-js/actual';
// console.log('-------------------- aula 271');
// console.log(
//   'Resumo: existem dois modos na programação. O primeiro é o de desenvolvimento, e o seundo e final é o deprodução.'
// );
// console.log(
//   'O modo de desenvolvolvimento é onde desfrutamos das bibliotecas que ficam disponóveis pelo npm. Bibliotecas como geolocation usado no Mapty e outros'
// );
// console.log(
//   'O segundo modo é o modo que programadores profissionais usam. Pois nele o código fica otimizado para uso do cliente.'
// );
// console.log(
//   'N modo de producção todos os arquivos ficam compactadoes em um só para melhorar o desempenho do aplicativo.'
// );
// console.log(
//   'Esse arquivo final na produção é chamado de bundle, ele é feito por programas como ravel'
// );

// console.log('-------------------- aula 272');
// console.log(`----- modules: são pedaços de códigos independentes e self-contained que ao ser exportados para outros códigos viram API. e ao receberem códigos de outros criam dependencia deles.
//     As cinco principais vantajens de usar modulos são
//     1. ajuda a compor software mais complexos, uma vez que simplifica a logica
//     2. ajuda a dividir o problema, o q na hora de desenvolver ajuda muito
//     3. abstrai detalhes especificos demais para poder usar determinados componentes
//     4. deixa o código mais organizado
//     5. fica fácil de reutilizar o código feito`);

// console.log('-------------------- aula 273');
// // import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // addToCart('bread', 5);
// // console.log(price, tq);

// console.log('Importing module');
// // console.log(shippingCost);

// // import * as ShoppingCart from './shoppingCart.js';
// // ShoppingCart.addToCart('bread', 5);
// // console.log(ShoppingCart.totalPrice);

// // import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 3);
add('apple', 4);
console.log(cart);

// // console.log('Start fetching');
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);
// // console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// console.log(lastPost);
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// console.log('-------------------- aula 275');
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 18;
//   const totalPrice = 237;
//   const toalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart`);
//   };
//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} order from suplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     toalQuantity,
//   };
// })();
// console.log(shoppingCart2);
// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);
// console.log(shoppingCart2);
// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
console.log(stateDeepClone);
state.user.loggedIn = false;

if (module.hot) {
  module.hot.accept();
}

class Pearson {
  greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const augusto = new Pearson('Augusto');
console.log('augusto' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));
import 'core-js/stable';

// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

//Polyfilling async functions
import 'regenerator-runtime/runtime';
