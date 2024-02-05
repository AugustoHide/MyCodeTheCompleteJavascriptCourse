'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg}! ${response.status}`);
    return response.json();
  });
};
// console.log('------------------- aula 252');
// const getCountryData = function (country) {
//   //Country 1
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     `Country not found!`
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbour found');
//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         `Country not found!`
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong! ${err.message}.
//       Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// const getCountryData = function (country) {
//   //Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found! ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('brazil');
// });
// getCountryData('gersgsrthe');

// console.log('------------------- aula 249');

// const getDataCountryAndNeighbours = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);
//     //Get neighbour country 2
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getDataCountryAndNeighbours('portugal');
// getDataCountryAndNeighbours('brazil');

// console.log('------------------- aula 248');

// const getDataCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send(); // asyncronous

//   /* you have to wait for the asycronous .send() to finish.
// When it finishes it will do the load event, hat is when we know that it has benn finished the .send() */
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `<article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${
//           Object.values(data.languages)[0]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           Object.values(data.currencies)[0].name
//         }</p>
//     </div>
//     </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getDataCountry('portugal');
// getDataCountry('brasil');
// getDataCountry('usa');

/* 
console.log('------------------- aula 247');
console.log(`
    Syncronousity: most of the code is syncronous, one line is executed after another in order.
    So there is blocking, with is cmds that waits for the user response for example.
    For this cases, the blocking stops the execution of all the rest of the code while waiting for the blocking comand.
`);
console.log(`
    Asyncronous: in this cases is non-blocking, whitch is more efficient for cases of blocking code.
    The blocking code can be executed on the background and when it is ready oit is executed.
`);
console.log(`
    Some code is automatically executed asyncronous.
`);
console.log(`
    AJAX: asyncronous javascript and xml: xml is not used commonly today, what it is more used is JSON.
    AJAX helps with reques and response
`);
console.log(`
    API: piece of self-conteined software that can be used as part of other app.
    Like DOM, GEolocation
    Online API: app that implements receive requests and send data.
`); */

// console.log('------------------- aula 259');
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('test end');
/* 
console.log('------------------- aula 260');
const lotteryPromise = new Promise(function (resove, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() > 0.5) {
      resove('You win \u{1F64B}');
    } else {
      reject(new Error('You lost your money \u{1F44A}'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promissifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(1)
  .then(() => {
    console.log(`1 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('5 second passed');
    return wait(1);
  });

Promise.resolve('ressolve').then(x => console.log(x));
Promise.reject(new Error('reject')).then(x => console.error(x)); */

// console.log('------------------- aula 261');
// console.log('----- Promissifying callbacks');
// // navigator.geolocation.getCurrentPosition(
// //   position => console.log(position),
// //   err => console.error(err)
// // );
// // console.log('Getting position');

// const getPositon = function () {
//   return new Promise(function (resolve, reject) {
//     // position => resolve(position), err => reject(err);
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function (lat, lng) {
//   getPositon()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=772447993890672750941x65189`
//       );
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Problem with geocoding`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error('Country not found');
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => console.error(`The error was ${err}`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/////////////////// Primeira tentativa
// let newImage;
// console.log('Beggining', newImage);
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     newImage = document.createElement('img');
//     console.log('createImg', newImage);
//     resolve(imgPath);
//   });
// };
// createImage('img/img-1s.jpg')
//   .then(imgPath => {
//     newImage.src = imgPath;
//     console.log('imgPath', newImage);
//     newImage.onload = function () {
//       console.log('yes');
//       return newImage;
//     };
//     newImage.onerror = function () {
//       console.log('no');
//       throw new Error('Could not load the image');
//     };
//   })
//   .then(newImage => {
//     console.log('ClassAdd', newImage);
//     newImage.classList.add('images');
//     document.body.append(newImage);
//   })
//   .catch(err => console.log(err));

/////////////////// Segunda tentativa
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// let currentImg;
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const newImage = document.createElement('img');
//     currentImg = newImage;
//     newImage.src = imgPath;

//     // newImage.addEventListener('load', function () {
//     //   document.querySelector('.images').append(newImage);
//     //   resolve(newImage);
//     // });
//     newImage.onload = function () {
//       document.querySelector('.images').append(newImage);
//       resolve(newImage);
//     };

//     // newImage.addEventListener('error', function () {
//     //   reject(new Error('Could not load the image'));
//     // });
//     newImage.onerror = function () {
//       reject(new Error('Could not load the image'));
//     };
//   });
// };

// createImage('img/img-1.jpg')
//   .then(() => wait(2))
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(() => wait(2))
//   .then(() => {
//     currentImg.style.display = 'none';
//     createImage('img/img-3.jpg');
//   })
//   .then(() => wait(2))
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(`THIS IS THE ERROR: ${err}`));

// console.log('------------------- aula 263 + 264');

// const getPositon = function () {
//   return new Promise(function (resolve, reject) {
//     // position => resolve(position), err => reject(err);
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const pos = await getPositon();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const resGeo = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=772447993890672750941x65189`
//     );
//     if (!resGeo.ok) throw new Error('Problem gettign location data');
//     const dataGeo = await resGeo.json();

//     // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res));

//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem gettign country info');
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} \u00AE\uFE0F`);
//     renderCountry(`Something went wrong ${err.message}`);
//     throw err;
//   }
// };
// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);

// // whereAmI()
// //   .then(city => console.log(`2: ${city} \u002A\uFE0F\u20E3`))
// //   .catch(err => console.error(`2: ${err} \u002A\uFE0F\u20E3`))
// //   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   // console.log('1: Will get location');
//   // const city = await whereAmI();
//   // if (typeof city === 'Error') console.log(`2: ${city}`);
//   // console.log(`2: ${city}`);
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}!`);
//   } catch (err) {
//     console.error(`2: ${err}!`);
//   }
//   console.log('3: Finished getting location!');
// })();

// console.log('------------------- aula 265');
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital[0]));
//   } catch (err) {
//     console.log(err);
//   }
// };
// get3Countries('portugal', 'brasil', 'tanzania');

// console.log('------------------- aula 266');
// console.log('----- Promise race: it returns the first promise to finish ');
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`), timeout(5)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// console.log('----- Promise.allSetled');
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('aNOTHERSuccess'),
// ]).then(res => console.log(res));

// console.log('----- Promise.all');
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('aNOTHERSuccess'),
// ]).then(res => console.log(res));

// console.log(
//   '----- promise.any: it is like promise.race, but ignoring the rejected promises'
// );
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('aNOTHERSuccess'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
let currentImg;
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImage = document.createElement('img');
    currentImg = newImage;
    newImage.src = imgPath;

    newImage.onload = function () {
      document.querySelector('.images').append(newImage);
      resolve(newImage);
    };

    newImage.onerror = function () {
      reject(new Error('Could not load the image'));
    };
  });
};

///////////////// Primeira tentativa
// const loadNPause = async function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const newImage = document.createElement('img');
//     currentImg = newImage;
//     newImage.src = imgPath;

//     newImage.onload = function () {
//       document.querySelector('.images').append(newImage);
//       resolve(newImage);
//     };
//     newImage.onerror = function () {
//       reject(new Error('Could not load the image'));
//     };
//   });
// };

///////////////// Segunda tentativa
const loadNPause = async function () {
  try {
    const img1 = await createImage('img/img-1.jpg');
    await wait(2);
    img1.style.display = 'none';

    const img2 = await createImage('img/img-2.jpg');
    await wait(2);
    img2.style.display = 'none';

    const img3 = await createImage('img/img-3.jpg');
    await wait(2);
    img3.style.display = 'none';
  } catch (error) {
    console.error(`loadNPause error: ${error}`);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async imgPath => await createImage(imgPath));
    const imgsEl = await Promise.all(imgs);
    console.log(imgs, imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.log(error);
  }
};

const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
loadAll(imgArr);
