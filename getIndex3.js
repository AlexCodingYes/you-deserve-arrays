const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an Array: "));
console.log(userArray.length);

if(userArray.length>=4){
console.log(userArray[3]);
}
else{
    console.log(userArray[userArray.length - 1]);
}