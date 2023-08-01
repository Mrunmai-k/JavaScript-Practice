// Conditionals in JavaScript
var age = 34;
// // Single if statement
if (age > 8 ){
    console.log("You are not a kid");
}

// if-else statement
if (age > 8 ){
    console.log("You are not a kid");
}
else{
    console.log("You are a kid");
}

// if-else ladder
if (age > 2 && age <= 18)
{
    console.log("You're not a kid");
}
else if(age > 19 && age <= 24)
{
    console.log("You're not a teenager");
}
else if(age > 25 && age <= 100){
    console.log("Bacche nhi rahe ab");
}
else{
    console.log("Ab bhagwan hi jane");
}
console.log("end of ladder");