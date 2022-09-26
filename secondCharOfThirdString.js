const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let thirdItem = userArray[2];

let secondChar = thirdItem[1]

if(typeof thirdItem !== 'string'){
    console.log("Error")
} else{
console.log(secondChar);
}