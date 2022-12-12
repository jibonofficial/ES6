// Function Declaration
var age1 = calcAge1(1991);
function calcAge1(birthYear){
    return 2037 - birthYear;
}

// Function Expression

var calcAge2 = function (birthYear){
    return 2037 -birthYear;
}
var age2 = calcAge2(1991);

console.log(age1, age2);