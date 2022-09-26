const prompt = require('prompt-sync')({sigint: true});
const secondArray = prompt('Enter an array: ');
const last = secondArray[secondArray.length - 1];
array = JSON.parse(secondArray);
console.log(last);
