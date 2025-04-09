// constructor function allows to create multiple instance using one object
// constructor function gives a new instance each time
// A constructor function is a regular function used to create multiple similar objects. You use the new keyword with it, and this refers to the new object being created.


// ? When we use (new) Js does four things behind the scenes
//*1 creates a new empty object 
//*2 sets this keyword inside the function to point that new object
//*3 links that object to prototype
//*4 returns the object for you automatically



// constructor function

function User(username,loginCount,isLoggedIn)
{
    this.username=username,
    this.loginCount=loginCount,
    this.isLoggedIn=isLoggedIn

    // return this
}

const userOne=new User("waseem",3,true)
const userTwo=new User("ali",2,true)
console.log(userOne)
console.log(userTwo)
// console.log(new)


