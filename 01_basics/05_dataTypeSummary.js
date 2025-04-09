//how data is stored in memory and access on this base there are two categories 
//Js is dynamic type(it doesn't require to define the type of variable)

// Primitive
// Primitive data types are known as call by value
// it gives orginal data
//string,number,BigInt,boolean,null,undefined,symbol 

const id=Symbol('134')
const anotherId=Symbol('134')
console.log(id===anotherId)
console.log(id)
console.log(anotherId)
const name="waseem"

const bigNumber=234234234234234234234n
console.log(typeof bigNumber)
console.log("name",typeof name)

// Non Primitive(refrence type)
// call by reference
//arrays,objects, functions

const heroes=["shaktiman","superman","spiderman"]

const myObj={
    name:"waseem",
    city:"gujranwala"
}


const myfunc=function myFunction(){
    console.log("my function");
} 

console.log(typeof heroes)


//note: to master Js master objects and browser events




//memory management 

//stack memory(Primitive)->used for storing primitive data types
// and heap memory(Non Primitive) => used for storing objects, functions,and others


//in stack we get copy of data if we tried to change it we are going to change the copy data not the actual original data
//stack follows lifo 
//stack has fixed size and is smaller than the heap memory
//when function returns its stack memory is automatically removed
//changing a primitive value doesnot affect the original value


//drawback
//since stack has limited space ,excessive recursive calls or the infinite loops  can cause a  stack overflow error 


let myName="waseemaziz"
let secondName=myName

secondName="abdulaziz"
console.log(myName) //waseemaziz
console.log(secondName)//abdulaziz


//in heap we get refernce of original data if we change the data it will the  change the original data
//heap is large dynamic space memory
//like stack memory in the heap is not automatically cleared when function completes

//working of heap 
//when object is created it is stored  in heap memory and a variable holds the reference(memory address) to it 
//this allow  multiple variable to point to the same object  causes changes to reflect accross all the references
//Js  Garbage Collector automatically removes the unused objects, but memory leaks can still occurs




// Where Is the Function Stored?
// The function definition (code) itself is stored in the heap.
// However, every time a function is executed, a new execution context is created and pushed onto the stack.

function test(data,newobj){
data="hamaza"
newobj.name="ali"     //this reference will change the original data
console.log("result in the function",data,myObj.name)
}

const myobj={
    name:"waseem"
}

console.log("myObject before call",myObj)
test("ali",myObj)
console.log("myObject after call",myObj)





function myRecursiveFunction(range)
{
    if(range<=10)
    {
        console.log("Recursive function called",range,"times")
        myRecursiveFunction(range+1)
    }
    
}

myRecursiveFunction(1)



//how Js Manages Memory(Garbage Collection)
//JavaScript has an automatic Garbage Collector (GC) that frees up heap memory by removing objects that are no longer in use.
//how it remove it 
//it checks the objects the one that doesnot have reference it removes them from memory