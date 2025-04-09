// create an Object and a Map to store the names and ages of three people. Then:

// Update the age of one person in both the object and the map.

// Log the keys and values of both the object and map.



// using object
const myObject={
    hamza:28,
    ali:25,
    waseem:24
}

//using map
const myMap=new Map();
myMap.set("waseem",24)
myMap.set("ali",20)
myMap.set("usman",23)

// update age in object
myObject.hamza=34
// console.log(myObject)  //{ hamza: 34, ali: 25, waseem: 24 }

//update age in map 
myMap.set("ali",22)
console.log(myMap)  //Map(3) { 'waseem' => 24, 'ali' => 22, 'usman' => 23 }
console.log(myMap.get("ali")) //22
console.log(myMap.has("ali"))//true
console.log(myMap.entries())

//console values and keys of objects
console.log("Object keys",Object.keys(myObject))
console.log("Object values",Object.values(myObject))



console.log("Maps keys",[...myMap.keys()])
console.log([...myMap.keys()])
console.log("Maps values",[...myMap.values()])  //Maps values [ 24, 22, 23 ]
console.log("Maps values",...myMap.values())    //Maps values 24 22 23


// myMap.clear() it clears the map 
console.log(myMap)





/*
set(key, value): Add or update key-value pair.

get(key): Retrieve value by key.

has(key): Check if key exists.

delete(key): Delete key-value pair.

clear(): Clear all entries.

size: Get the number of entries.

keys(): Get an iterator for the keys.

values(): Get an iterator for the values.

entries(): Get an iterator for the [key, value] pairs.

forEach(callback): Iterate over all key-value pairs with a callback
*/