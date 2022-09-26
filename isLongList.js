const prompt = require('prompt-sync')({sigint: true});

let userArray = (prompt("Enter an Array: "));
array1 = JSON.parse(userArray);

if(array1.length>=10){
console.log('true');
}
else{
    console.log('false');
}