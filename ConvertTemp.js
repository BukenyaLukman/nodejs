"use strict"

let celcius = process.argv[2];

console.log(celcius);

let fahrenheit = (celcius * 9/5) + 32;

console.log(celcius, " in Celcius is ", fahrenheit,"Fahrenheit");
