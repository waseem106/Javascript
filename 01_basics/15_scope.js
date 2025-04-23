// block scope    let and const
// function scope var
//global scope     variables decalred outside functions and blocks are global scoped



function one(){
    const username="waseem"

    function two()
    {
        const website="youtube"
        console.log(username)
    }
    // console.log(website)  cannot access it 
    two()
}
one()







console.log(addone(2))  // we can call it  (function is hoisted on the top with its declaration and body)
function addone(num)
{
    return num+1
}


// console.log(sum(3)) // not allowed   Reference Error (it is variable so it is  also hoisted but not initialized on the top)
const sum=function addone(num){
    return num+1
}
console.log(sum(3)) //allowed




