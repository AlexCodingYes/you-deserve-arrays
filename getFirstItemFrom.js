const prompt = require('prompt-sync')({sigint: true});
let firstArray = prompt('Enter an array: ');
array = JSON.parse(firstArray);

console.log(array[0]);