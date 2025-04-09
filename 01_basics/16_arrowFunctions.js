//this refers to the current context


const user={
    username:"waseem",
    city:"guj",
    message:function()
    {
        console.log(`Welcome ${this.username} `)
        // ? we will check what is this referencing to so for that we will console it
        console.log(this)
    }
}
// console.log(this)  //{}  empty because there is no global context right  now

// user.message() //welcome waseem
// user.username="ali"
// user.message()//welcome ali  


// ? checking this outside the object 

function thisTest()
{
    // console.log(this)
}
// thisTest()


const test=()=>{
    // console.log(this) //  {}
}

// test()


// * methods to create or use arrow functions

const addTwo=(a,b)=>{          //in curly braces we have to write the return keyword
    return a+b
}
// console.log(addTwo(2,3));


const sum=(a,b)=>a+b    //ther is no need to write the return keyword it does automatically
console.log(sum(2,6)); 

const add=(a,b)=>(a+b)   //there is also no need to write the return statement it will do automatically
console.log(add(2,9))