const number=400
console.log(number)  //400


//when we use Number we are explicitly defining the type so it ensure only number will be stored
const balance=new Number(400)
console.log(balance)  //[Number: 400]

console.log(balance.toString())
console.log(typeof balance.toString())
console.log(balance.toString().length) 
console.log(balance.toFixed(2)) //400.00
console.log(balance.toExponential()) //4e+2
console.log(balance.toPrecision(5))  //will give precise value

const bigHundred=1000000000
//it will add commas to represent the number to easily  read
console.log(bigHundred.toLocaleString()) //1,000,000,000


//Maths

// Absolute Value:
//abs ->used to convert negative values into the postive values

let newnumber =-400
console.log(Math.abs(newnumber))



//Rounding & Truncation:

console.log(Math.floor(3.7)) //3 rounds to the smaller
console.log(Math.ceil(3.1)) //4 rounds to the greater
console.log(Math.round(3.4)) //3  rounds to the nearest
console.log(Math.round(3.5)) //4 rounds to the nearest
console.log(Math.trunc(3.7)) //3 removes  the decimal part


//Random Numbers:
//math.random() gives values between 0 and 1 only 
console.log("Random")
console.log(Math.random())
console.log(Math.ceil((Math.random()*10)+1)*100)


//Min and Max:
//to find the minimum and max value in array 
//it does not take a array directly into it, it accept the list of numbers , so we can use spread operator (...)to pass the elements of the array

//spread operator(...)
//spread operator takes the elements of the array and spread them out as individual  arguments to the min function

//there is one more operator that is known as rest operator 
//rest operator is used to collect all the  reamaining arguments into an array 
console.log(Math.min(2,34,5,2324,234,345,-5)) //-5
const testArray=[3,34,234,5,345,234534,5345]
console.log(Math.min(...testArray)) //3
console.log(Math.max(...testArray)) //234534



//Converting and Parsing Numbers
// Parsing Strings to Numbers
console.log(parseInt("42"));         // 42
console.log(parseFloat("3.14"));       // 3.14
console.log(parseInt("101", 2));       // 5 (interprets "101" as a binary number)
