'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
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
`);
