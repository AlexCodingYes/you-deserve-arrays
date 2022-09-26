const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

let bool = true;

if(typeof userArray[0] === 'number'){
    console.log ("If the first character a number? " + bool);
}
else if (typeof userArray[0]=== 'string'){
    
    console.log(" If the first character not a number " + bool);
}