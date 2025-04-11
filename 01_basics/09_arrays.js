//arrays can be decalred in different ways
const myNumber=new Array(234,234,234,545)
const myArray=[1,2,3,4,5]


//  Adding & Removing Elements

//push and pop 
//push-> add the item in the array at last
//pop-> remove the item from the last index
myArray.push(6)
myArray.push("545") //[ 1, 2, 3, 4, 5, 6,'545']
myArray.pop()// '545


//unshift() and shift()
// unshift add the new item at the starting index , which shift all the present elements of the array also that is not optimized way if the values are in thousands it will take alot of the time 
//shift() it removes the first item from the array 


myArray.unshift(234)
// [
//     234, 1, 2, 3,
//     4, 5, 6
// ]

myArray.shift() // [1, 2, 3, 4, 5, 6 ]



//searching elements in the array

const arr = ["Apple", "Banana", "Cherry", "Banana"];

console.log(arr.includes("Banana")); // true
console.log(arr.indexOf("Banana")); // 1
console.log(arr.lastIndexOf("Banana")); // 3

console.log(arr.find(fruit => fruit.startsWith("B"))); // "Banana"
console.log(arr.findIndex(fruit => fruit.startsWith("C"))); // 2

console.log(arr.filter(fruit => fruit.includes("a"))); // ["Banana", "Banana"]
console.log(arr.some(fruit => fruit === "Cherry")); // true
console.log(arr.every(fruit => fruit.length > 3)); // true




console.log(myArray.indexOf(3))//2
console.log(myArray.includes(5))//true
//find() it doesnot take the a direct value as argument it takes a callback function that defines a condition to be met 
// console.log(myArray.find(3)) it is a wrong way it will give error
console.log(myArray.find(num=>num>2)) //it gives the first match 3 not the remaining
console.log(myArray.findIndex(test=>test===2))//ndex of first match 1


//converting array into the string
const myString=myArray.join()
console.log(myString) //1,2,3,4,5,6
console.log(typeof myString)// string 


//slice(startIndex,lastIndex) and splice(startIndex,lastIndex)
//slice doesnot include the last index and does not change the orginal array
//splice include the last index but it removes those values from the original array
const myNewArray=myArray.slice(1,3)
console.log("original",myArray) //[ 1, 2, 3, 4, 5, 6 ]
console.log("slice",myNewArray) // [ 2, 3 ]

console.log(myArray)
const spliceArray=myArray.splice(1,3)
console.log("splice",spliceArray) //[ 2, 3, 4 ]

console.log(myArray)






// pushing one array into the another array


const hero=["batman","spiderman","antman","superman"]

const newhero=["hulk","loki","ironman"]

// hero.push(newhero)

// console.log("hero string after pushing a string array ",hero)  //it will take it string and saved it 

//to solve this issue we will use the spread operator


hero.push(...newhero)
console.log(hero)



const nestedArray=[12,423,234,[234,234,434,[2344324,234234,234,[2343,234,[234]]]]]
console.log(nestedArray)  //it will output [ 12, 423, 234, [ 234, 234, 434, [ 2344324, 234234, 234, [Array] ] ] ]


// we will try to get its element by using spread operator

console.log("Array Spread Operator",...nestedArray)   //12 423 234 [ 234, 234, 434, [ 2344324, 234234, 234, [ 2343, 234, [Array] ] ] ]

// as we can see it is just spreading the first level elements of the array 

console.log("Array by flat",nestedArray.flat(Infinity))  //it will spread all the elements of the array 

//Array by flat [
//     12,    423, 234,
//     234,    234, 434,
//      324, 234, 234,
//    243,34, 234
// ]



// !!!!!!!!!!!!!!!!!!!!Problem!!!!!!!!!!!!!!!
// The typeof operator returns object because a JavaScript array is an object.
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
// when we are getting the data from anywebpage it comes in different format 
// so to ensure it we are getting the actual data we need to check it 
// checking the data is the array format or not
console.log(Array.isArray("Happy"))   //false 
console.log(Array.from("Happy"))   //it converts it to the array  [ 'H', 'a', 'p', 'p', 'y' ]
console.log(Array.from({name:"waseem"})) //it will not convert it into the array []

let score1=233
let score2=253
let score3=273

console.log(Array.of(score1,score2,score3))//it will makes an array [ 233, 253, 273 ]
const myString2="waseem"
let myArray2=[...myString2]
// myArray2[0]=myString2
console.log(myArray2)


// const myobj={
//     name:"asem",
//     cty:"guj",
//     detail:
//     {
//         phone:"wase"
//     }
// }

// console.log(...myobj)





//*  Arrays.keys() it returns a object(array iterator) that contains the indexes of array

const fruits=["mango","apple","orange"]
const res=fruits.keys()
console.log(res)

for(let x of res){
    console.log(x)
}



// *  Arrays.entries() returns a object(array iterator) that contain key value pairs

const entries=fruits.entries()
console.log(entries)

for(let x of entries)
{
    console.log(x)
}



// * Arrays.with()  update the element in array at specific index without changing the original array


const fruitss=["mango","apple","grapes","orange"]

const result=fruitss.with(2,"guava")
console.log(result)





// * what is the difference between simple array.length iteration and array.entries as in array
// array.length is a traditional approach
const fruits2 = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits2.length; i++) {
  console.log(i, fruits2[i]);  // Need to manually handle index
}


const fruits3 = ["Apple", "Banana", "Cherry"];

for (let [index, value] of fruits3.entries()) {
  console.log(index, value); // Cleaner and direct access to index & value
}

