// A Set in JavaScript is a built-in object that stores unique values of any type, whether primitive values or object references. It’s similar to an array but with the important distinction that it does not allow duplicate values. Sets are especially useful when you need to store a collection of values where uniqueness is important.


const mySet=new Set()
mySet.add(2)
mySet.add(1)
mySet.add("waseem")
mySet.add(2) // it will not be added
console.log(mySet.size)  //3
console.log(mySet.has("waseem"))//true
console.log(mySet)


mySet.forEach(value=>{console.log(value)})