

// JavaScript Variables can be declared in 4 ways:

// Using var        function scope and not block scope , can be redeclared, can be reassign value,bind to this
// Using let        block scope & block scope, cannot be redclared in same scope, can reassign value,doesnot bind to this
// Using const      block scope & block scope, cannot be redeclared in same scope, can not reassign value,doesnot bind to this
// Automatically


var name="waseem"

const accountId=124

let accountEmail="waseem@gmail.com"

let accountPassword="234234"

accountCity="jaipur"


accountEmail="hamza@gmail.com"
accountPassword="12345"
accountCity="lahore"
name="ali"

let happy;
var car;

// accountId=345

console.log(accountId)
console.log(name)

console.table([accountId,accountEmail,accountPassword,accountCity,happy,car])

testing()
function testing()
{
    console.log("waseem")
    testingVarscope="global scope"
}

testing()
console.log(testingVarscope)
// test()

 var test =function testing2(){
    console.log("tesing hoisting")
}

test()







// Hoisting 
// In JavaScript, declarations of variables and functions are generally hoisted (moved) to the top of their scope.

// For variables declared with 'var':
// If the variable is accessed before initialization, it will return 'undefined' because the declaration is hoisted but the initialization is not.

// For variables declared with 'let' and 'const':
// They are hoisted to the top of their scope as well, but they enter the **Temporal Dead Zone (TDZ)**.
// This means they are in an uninitialized state and cannot be accessed before initialization.
// If you try to access them before they are initialized, a **ReferenceError** will be thrown because they are not yet initialized.




//hoisting in the fucntions 

//hositing in function decalration 
//function declration mean function defined by keyword followed by its name and body
// function name(){body}
//entire function name+body is hoisted on the top so it can be accessed any time before initilization and declaration


//hoisting in function expression 
// when a function is assigned to the variable it is not known as function expression
// var name =function data(){body}
// when it is function expression only the varaible  name is hoisted and not initialized 
// when tried to access it before function expression is assigned it will 





console.log("var",num)         //undefined
// console.log("let",num1)     reference Error
// console.log("const",num2)   refrence Error

var num=12
let num1=23
const num2=12




//checking var block scope

{
    var blockscope="var is not block scope"
}
console.log("varBLockScope",blockscope)