//? IIFE stands for Immediately Invoked Function Expression. It is a function that executes immediately after it is defined, without needing to be explicitly called.\

// An IIFE is wrapped inside parentheses () to ensure that JavaScript treats it as an expression rather than a function declaration.

// The function is defined inside ().

// The () at the end immediately invokes the function.



(function(){
    console.log("I am iife function")
})();  // we need to use eliminator operator other wise it does not knew where to stop it

((name)=>{
    console.log(`i am iife arrrow function ${name}`)
})("waseem");

