"use strict"; //treat all the Js code as newer version

console.log("null type: ", typeof null); //object
console.log("undefined type: ", typeof  undefined); //undefined
console.log("undefined type: ", typeof NaN); //number
console.log("undefined type: ", typeof typeof NaN); //first will return number that will be string so string

//checking falsy and truthy values
function testingTruthy(value){
    if(value)
    {
        console.log(`${value} is truthy`)
    }
    else{
        console.log(`${value} is falsy`)
    }
}

testingTruthy(false)   //falsy
testingTruthy(true)     //truthy
testingTruthy(0)        //falsy
testingTruthy(1)        //true    
testingTruthy(null)     //falsy
testingTruthy(undefined) //falsy
testingTruthy("name")    //name os truthy
testingTruthy({})         //truthy
testingTruthy([])          //truthy







// console.log(1==="1")     false
// console.log(true==="true")   false

//Primitive Data Types (Immutable, Stored by Value)

// Number → Integers & floating points (42, 3.14, Infinity, NaN)
// BigInt → Large integers (9007199254740991n)
// String → Text values ("Hello", 'World', `Template`)
// Boolean → Logical values (true, false)
// Undefined → Variable declared but not assigned a value
// Null → Represents intentional absence of value
// Symbol → Unique, immutable value (used as object keys)

// Non-Primitive Data Types (Reference Types, Stored by Memory Address)

// Object → Key-value pairs ({name: "Waseem", age: 23})
// Array → Ordered list (["Apple", "Banana"])
// Function → Reusable block of code (function greet() {})
// Date → Represents time (new Date())
// Set → Collection of unique values (new Set([1, 2, 3]))
// Map → Key-value pairs with any data type as keys (new Map())








// The main differences between primitive and non-primitive data types in JavaScript boil down to **how they're stored, copied, and whether they're mutable**.

// ### **Key Differences**

// - **Mutability:**
//   - **Primitive:** Immutable. Once a primitive value (like a number, string, or boolean) is created, it cannot be altered. Any "change" results in a new value.
//   - **Non-Primitive:** Mutable. Objects, arrays, functions, etc., can have their properties or elements modified after creation.

// - **Memory Storage:**
//   - **Primitive:** Stored directly in the stack. This means each variable holds its actual value.
//   - **Non-Primitive:** Stored in the heap, with the variable holding a reference (memory address) to the actual data.

// - **Copying Behavior:**
//   - **Primitive:** When you copy a primitive variable, you copy the actual value. Changing the copy does not affect the original.
//   - **Non-Primitive:** When you copy a non-primitive variable, you're copying the reference. Modifying the object through one variable will reflect in the other since both refer to the same object.

// ### **Illustrative Examples**

// #### **Primitive (Immutable)**
// ```js
// let a = 4;
// let b = a;  // b gets a copy of the value 4
// b = 5;      // b now holds a new value 5
// console.log(a); // Output: 4 (original value remains unchanged)
// ```

// #### **Non-Primitive (Mutable)**
// ```js
// let obj1 = { value: 4 };
// let obj2 = obj1; // obj2 references the same object as obj1
// obj2.value = 5;  // Changing the value property affects the object referenced by both variables
// console.log(obj1.value); // Output: 5 (change is reflected in both)
// ```

// In summary, primitives directly hold their data and are immutable, whereas non-primitives are stored by reference and can be modified even after creation. 
 




//When we talk about "truthy" and "falsy" in JavaScript, we're discussing how values are interpreted as true or false in Boolean contexts. "Truthy" refers to any value that is treated as true, while "falsy" refers to values treated as false.

// These concepts play a big role in things like type coercion, conditional statements, and loops, where JavaScript automatically converts values to booleans. It's part of how the language handles different types of values in boolean-checking situations.

// In JavaScript, truthy and falsy values refer to how values are evaluated within Boolean contexts, like conditionals. Truthy values evaluate to true, and falsy ones evaluate to false. This is important in writing concise code that doesn't require explicit boolean comparisons.