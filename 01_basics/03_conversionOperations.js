


function display(value)
{
    return console.log({"value":value,"type":typeof value})
}

const score="34"
const valueInNumber=Number(score)
display(valueInNumber)  //34 as number


const isLoggedIn="true"

const booleanIsLoggedIn=Boolean(isLoggedIn)
display(isLoggedIn)  //true as string 


const someNumber=234234

const stringNumber=String(someNumber)
display(stringNumber)  //234234 as string 



// operations



const name ="waseem"
const lastname=" aziz"
const fullName=name+lastname
console.log(fullName)




console.log(1+"2") //12
console.log("1"+2) //12
console.log("1"+2+4) //124
console.log("1"+"2")//12
console.log(4+2+"2") //62


// logical  and nullish opeartors in js
// && || ??

// && used for conditional execution and short circuiting

console.log(5 && 4) //output: 4 both are truthy ,returns last value    
console.log(0 && 4) //output: 0  stops at falsy    
console.log(5 && 0) //output: 0  stops at falsy
console.log(undefined && "Hello"); //Output: null (stops at falsy)  


const users={name:"Waseem",city:"Gujranwala"}
users && console.log("users is not empty")

const anotherUser={}
anotherUser.age && console.log("users is empty")



let username = "";
let defaultUser = username || "Guest";
console.log(defaultUser); // ✅ Output: "Guest" ("" is falsy)


// ?? used to set default values 

console.log(null ?? "Default");   // ✅ Output: "Default"
console.log(undefined ?? "Hello"); // ✅ Output: "Hello"
console.log(false ?? "No value");  // ✅ Output: false (because false is a valid value)
console.log(0 ?? 100);  // ✅ Output: 0 (0 is valid, not null/undefined)
