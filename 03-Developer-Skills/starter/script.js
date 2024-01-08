// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const measureKelvin = function () {
//   const measure = {
//     type: 'temp',
//     unir: 'celcius',
//     value: Number(prompt('Degrees celcius:')),
//   };

//   //   console.table(measure);
//   //   debugger;
//   const kelvin = measure.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

function printForecast(maxTeps) {
  let forecast = '...';

  for (let i = 0; i < maxTeps.length; i++) {
    if (!Number(maxTeps[i])) continue;
    forecast += ` ${maxTeps[i]}\u00B0C in ${i + 1} days ...`;
  }

  return forecast;
}
const maxTeps = [17, 21, '', 23];
console.log(printForecast(maxTeps));
