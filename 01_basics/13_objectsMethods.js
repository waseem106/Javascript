// ? Object.assign(target,source)
//? copies properties from one or more objects(source )to a target object
const target = { a: 1 };
const source = { b: 2, c: 3 };

Object.assign(target, source);
// console.log(target); // { a: 1, b: 2, c: 3 }

// ?Constructor Function 
// we use constructor function where we have to create multiple objects with same data keys 

function Person(name,email)
{
    this.name=name
    this.email=email
}
//making a function that will be accessible by all objects of constructor
Person.prototype.greet=function(){
    // console.log(`Welcome ${this.name} `)
}

const obj1=new Person("waseem","waseem@gmail.comm")
obj1.newData="New Data"
const obj2=new Person("waseemaziz","waseem@gmail.comm")

obj2.greet()
obj1.greet()
// console.log(obj1,obj2)


// ?object.constructor() returns function used to create that object
//actually it returns the constructor function that create an object protoType
// The constructor property of an object returns the function that was used to create that object.
// It tells you the "type" of the object or how it was created.
const obj = {};
//? console.log(obj.constructor); // [Function: Object]

function Person1(name) {
    this.name = name;
}
const person = new Person1('Alice');
//? console.log(person.constructor); // Output: [Function: Person]




// ? Object.create(object(required),properties(optional))
// creates an object from existing object  and inherits its methods and properites
// useCase:inheritance without classes  
const animal = {
    speak: function() {
        // console.log("Animal speaks");
    }
};

// Create a new object with `animal` as its prototype
const dog = Object.create(animal);

dog.bark = function() {
    // console.log("Woof!");
};

dog.bark(); // Output: Woof!
dog.speak(); // Output: Animal speaks




// ? object.defineProperties(obj,descriptors)
//descriptors refer to property descirptor they are used to control how properies behave in terms of their values,mutability,enumerability and configurability
//? value :the value of property
//? writeable: indicate if the property value can be changed
//? enumerable : indicate will the property showed in console or for loop 
//? configurable:ndicates if the property can be deleted or if its attributes can be changed.

// adds or modifies multiple properties at once

const newPerson={}
Object.defineProperties(newPerson,{
    name:{value:"ali",enumerable:true,configurable:true},
    city:{value:'guj',enumerable:true,configurable:false} //enumarable to visible the propeties of objects by default use true
})
delete newPerson.city
delete newPerson.name
newPerson.city="hi"
newPerson.name="hsdf"
// console.log(newPerson)
// console.log(newPerson.name)
// console.log(newPerson.city)






// ?object.property(obj,key,descriptor)
// Defines a single property on an object.
const obj3={}
Object.defineProperty(obj3,"name",{value:"waseem",enumerable:true})
// console.log(obj3)


//? Object.entries(obj)
// Returns an array of [key, value] pair
const user = { name: "John", age: 25 };
// console.log(Object.entries(user));
// [["name", "John"], ["age", 25]]


//? Object.freeze(obj)
// Prevents all modifications (adding, changing, deleting).
const objTest = { name: "Alice" };
Object.freeze(obj);

objTest.name = "Bob"; // ❌ Not allowed   (will not give error but no change)
// console.log(objTest.name); // Alice


//? Object.fromEntries(iterable)
// UseCase:Converting a Map or an array of pairs back to an object.
const fruits=[
    ["apple",300],
    ["mango",200],
    ["orange",100]
]
const fruitsObj=Object.fromEntries(fruits)
// console.log(fruitsObj)

// ? Object.getOwnPropertyDescriptor(obj, property)
const objTest1 = { name: "Alice" ,city:"gujranwala"};
// console.log(Object.getOwnPropertyDescriptor(objTest1,"name"))

// ?Object.getOwnPropertyDescriptors(obj)
// console.log(Object.getOwnPropertyDescriptors(objTest1))



// ? Object.getOwnPropertyNames(obj)
const obj23 = Object.create({}, {
    hidden: { value: "secret", enumerable: false }
  });
//   console.log(Object.getOwnPropertyNames(obj23)); // ["hidden"]
  


  //?Object.groupBy()
  //method groups elements of an object according to string values returned from a callback function.
 // The Object.groupBy() method does not change the original object.




 //? Object.keys(obj)
 // Returns an array of object keys.



 //?Object.preventExtensions(obj)
 // Prevents adding new properties.
 const obj231 = { name: "Alice" };
Object.preventExtensions(obj231);

obj231.age = 30; // ❌ Not allowed
// console.log(obj231.age); // undefined

//?Object.prototype
// The prototype property allows you to add new properties and methods to objects.\


// ? Object.seal(obj)
//Making objects modifiable but not expandable.
// Prevents adding or removing properties, but allows modification.
// const obj = { name: "Alice" };
Object.seal(obj);

obj.age = 30; // ❌ Not allowed
obj.name = "Bob"; // ✅ Allowed

// console.log(obj); // { name: "Bob" }



//?Object.toString()
// Returns a string representation of an object.
const obj23434 = { name: "Alice" };
console.log(obj23434.toString()); // [object Object]
