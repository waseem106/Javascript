// think of property as a shared room where all similar data types can use properties and methods defined in it
//every property have proto type except null and undefined
// no other type can access the prototype of different one directly
//but can access or borrow methods using call(),apply(),bind()


// adding properties and methods  in the Object.prototype 
Object.prototype.sayHi = function () {
    return "Hi from Object!";
  };
  
  const obj = { name: "Waseem" };
  console.log(obj.sayHi()); 




//   Array.prototype

Array.prototype.first = function () {
    return this[0];
  };
  
  const nums = [10, 20, 30];
  console.log(nums.first()); 
  

//   Function.prototype

Function.prototype.log = function () {
    console.log("Function ran:", this.name || "anonymous");
  };
  
  function greet() {}
  greet.log();  //function ran greet
  


//   String.prototype
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
  };
  
  console.log("waseem".reverse()); // "meesaw"
  

// Custom Constructor Prototype
function Student(name) {
    this.name = name;
  }
  
  Student.prototype.greet = function () {
    return `Hi, I'm ${this.name}`;
  };
  
  const s1 = new Student("Waseem");
  console.log(s1.greet()); // Hi, I'm Waseem
  

  