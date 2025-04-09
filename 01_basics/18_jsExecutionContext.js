
// reference for more detail:https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/


//? Have you ever wondered how JavaScript works behind the scenes? It's actually quite fascinating! And that's what you'll learn about here.

// ?JavaScript is a single-threaded interpreted language. Every browser has its own JavaScript engine. Google Chrome has the V8 engine, Mozilla Firefox has SpiderMonkey, and so on. They all are used for the same goal, because the browsers cannot directly understand JavaScript code.



//*What is the Execution Context?
// When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

// During the context runtime, the parser parses the source code and allocates memory for the variables and functions. The source code is generated and gets executed.

// There are two types of execution contexts: global and function. The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution context is created whenever a function is called, representing the function's local scope.


// *Phases of the JavaScript Execution Context
//? There are two phases of JavaScript execution context:

// ?Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions and sets up the scope chain for the execution context.
// ?Execution phase: In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.



//* What is the Call Stack?
// To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack. A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

// It uses the LIFO principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.

// When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.