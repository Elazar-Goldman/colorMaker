"use strict";

let color = window.localStorage.getItem('tomato');

let elem = document.querySelector('.displayDiv');
console.log(color)
elem.style.backgroundColor = JSON.parse(color);

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

let vals = allStorage();

console.log(vals);

console.dir(localStorage);

for(let x=0;x<localStorage.length; x++){
    console.log(localStorage.tomato)
}