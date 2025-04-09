//array  iterator methods
// Array iteration methods operate on every array item:

// !!!!!!!!!!    forEach() !!!!!!!!!!!!

//it calls a function once for each array element(doesnot return anything)
//when we use forEach method on an array it takes a callback function as an argument .This callback funcition can accept //* three parameters currentValue,index(indexOfCurrentElement),array(the origianl array) it is useful to give the reference to the orignal array that isgood practice


let myArray=[1,2,3,4,5]

myArray.forEach(myFunction)

function myFunction(value,index,array){
    array[index]=value*2
}


myArray.forEach((value,index,arr)=>{
    // console.log("index",index,"value",value,"array",arr)
})




//* !!!!!!!!!! map() !!!!!!!!!!!!
//iterate each element and return a array
//map doesnot change the orignal array

let myArray2=[2,3,4,5,6,]

const result=myArray2.map((value)=>{
    return value=value*2

})

// console.log(result)

//* !!!!!!!!!! flatMap() !!!!!!!!!!!!
//best for mapping and flattening at the same time 
// returns a array
const words = ["Hello world", "JS is fun"];
const flattened = words.flatMap(word => word.split(" "));
// console.log(flattened); // ["Hello", "world", "JS", "is", "fun"]





//* !!!!!!!!!! filter() !!!!!!!!!!!!
//best for removing the elements that doesnot matched the condition
// creates a new array that passes the test

let scores=[100,200,300,123,342,342]

let passTest=scores.filter((value)=>{
    
        return value>300

})

// console.log(passTest)




//* !!!!!!!!!! reduce() !!!!!!!!!!!!
//reduce method runs onto the each array to reduce it to the single value
//reduce method works from left to right
//reduce method doesnot reduce the original array
// reduce function takes 4 argument
//Accumulator->previously accumulated returned value or total value that has returned yet
//current value
//current index
//array

//it can accept the initial value
// array.reduce((accum,value,index,array,){},10)
let numberArray=[1,2,3,4]

let sum=numberArray.reduce((accum,value)=>{
    // console.log(`accumulator: ${accum} `)
    return accum+value
},10)//here 10 is initial value of the accumulator

// console.log(sum)




//* !!!!!!!!!! reduceRight() !!!!!!!!!!!!
//it start iterating from the right to left
//it is used where flow should  be from right to left

let charArray=["a","b","c","d","e"]

let newCharArray=charArray.reduceRight((accum,value)=>{

    return accum+value
})


// console.log(newCharArray) //edcba




//* !!!!!!!!!! every() !!!!!!!!!!!!
//the every checks if all arrays values pass a test
//best for checking if all arrays valurs pass the test
//it returns true or false
let marks=[32,3,23,56,89,34,23,65,65,28,7,90,77]

let passed=marks.every((value)=>{
    return value>1
})

// console.log(passed)




//* !!!!!!!!!! some() !!!!!!!!!!!!
//checks  atleast one element satisfies the condition
//some arrays elements pass the test


let numbers=[12,34,23,23,53,43,123,232,342]

let someResult=numbers.some((value)=>{
    return value>15
})

console.log(someResult)



//* !!!!!!!!!! flat() !!!!!!!!!!!!
//used to remove nesting from a array

let nestedarray=[234,[34,[34,[4,[34,[434]]]]],34]
let flatArray=nestedarray.flat(Infinity)
console.log(flatArray)




