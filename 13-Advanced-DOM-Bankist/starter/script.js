'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/* Smooth scroll on the learn more btn */
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});
////////////////////////////////////////////
/////////////////// Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
console.log(
  '   NOTE: because there could be a lot of elements in the page adding eventlistener for each one can bring performance issues. Therefore, in this case is better to put eventListener on the parent of the similar child sons, so there wont be performance issies in case of hundreds or thousands of elements on the page'
);
///////////////////// Event delagation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  /* Matching stragedy */
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head, document.body);
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log('   NOTE: html element is synced live. NodeList is the contrary');

// console.log(document.getElementsByClassName('btn'));

// /* Creating and inserting elements */
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// /* message.textContent =
//   'We use cookies for improved functionallity ans analytics'; */
// message.innerHTML =
//   'We use cookies for improved functionallity ans analytics <button class="btn btn--close-cookie"> Got it! <buuton>';
// /* header.prepend(message); */
// /* header.append(message.cloneNode(true)); */
// header.append(message);
// console.log(
//   '   NOTE: prepend and append just add element just one time, after they just move'
// );

// // header.before(message);
// // header.after(message);

// console.log('----- delete elements');
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// console.log('---------- 188');
// console.log('----- styles');
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(
//   '   NOTE: the styles added befour are inline styles. they are added to the dom'
// );
// console.log(message.style.height);
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log('   NOTE: this way y can only get the inline styles.');
// console.log('----- getComputedStyles');
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 400 + 'px';

// console.log('----- setProperty');
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// console.log('----- Atributes');
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt, logo.src);
// console.log(logo.className);
// console.log(logo.designer);

// logo.alt = 'Minimalist logo design';
// console.log('--- non standart');
// console.log(logo.getAttribute('designer'));

// console.log('----- setAtribute');
// logo.setAttribute('company', 'Bankiest');

// console.log(logo.getAttribute('src'), logo.src);
// console.log('   NOTE: relative and the absulute path');

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href, link.getAttribute('href'));

// console.log('----- Data atributes');
// console.log(logo.dataset.versionNumber);

// console.log('----- Classes');
// logo.classList.add('c', 'd');
// logo.classList.remove('c', 'd');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// console.log('   dont use atribution with ClassList');
// // logo.classList = 'augusto'

// console.log('---------- 189');
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// btnScrollTo.addEventListener('click', function (e) {
//   const s1cords = section1.getBoundingClientRect();
//   console.log(s1cords);

//   console.log(e.target.getBoundingClientRect());
//   console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   // console.log('----- Scrolling');
//   // window.scrollTo(
//   //   s1cords.left + window.pageXOffset,
//   //   s1cords.top + window.pageYOffset
//   // );

//   // window.scrollTo({
//   //   left: s1cords.left + window.pageXOffset,
//   //   top: s1cords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// console.log('   NOTE: BOUCINGrECT IS RELATIVE TO THE VIEWPORT');
// console.log(
//   '   NOTE: window.pageXOffset, pageYOffset are the scroll value horizontal and vertical. distance beetwen element and the top of the page ??? LIKE HOW MUCH HAS GONE SCROLLED'
// );
// console.log(
//   '   NOTE: document.documentElement.clientHeight, document.documentElement.clientWidth: determine th height and the wisth of the window of the clients'
// );

// console.log('---------- 190 + 191');
// const h1 = document.querySelector('h1');

// const alerth1 = function (e) {
//   alert('addEventListener: Great you are reading the headind');
// };

// h1.addEventListener('mouseenter', alerth1);

// setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);

// console.log(
//   'onmouseenter is old school, is dated. addEventListener permit add more than one event handler, while onmoseenter overwrite'
// );
// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: Great you are reading the headind');
// // };

// console.log(
//   '   NOTE: almost all events happens in the document and then goes propagating until it comes to the right element. So it is like the evente hapenned inside the parent elemento too.'
// );

// console.log('---------- 192');

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);

//   console.log('--- stop propagation');
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   } /* ,
//   true */
// );

// console.log('---------- 193 + 194');
// const h1 = document.querySelector('h1');
// console.log('----- going downwards');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); /* only for DIRECT CHILDREN */
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// console.log('----- going upwards');
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// console.log('----- going sideways');
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
