//lets do a challenge we want that when string do trueLength it should return the true lenth of the string by removing extra spaces

const mystring="Ali  "
console.log(mystring.length)
// console.log(mystring.trueLength) //here trueLenth property doesnot exist

String.prototype.trueLength=function(){
    console.log("this",this)
    // console.log(this.toUpperCase())
    console.log("the true length",this.trim().length)
}
mystring.trueLength()

"ahmad".trueLength()




const myarray=["superman","spiderman"]
const myobj={
    name:"waseem",
    city:"guj"
}

Object.prototype.trueLength=function(){
    console.log("Hello i am true length")
}


Array.prototype.sayName=function(){
    console.log("Hello i am method of array")
}
console.log(mystring.trueLength())
console.log(myarray.sayName())
// myobj.sayName() //it doesnot have access to the sayname() as it is define in low level 




// inheritance in objects

const myuser={
    username:"Coder",
    pic:"pic.jpeg",
    
}

const newuser={
    cell:"12345",
    city:"Gujranwala",
    // __proto__:myuser ,  // it will allow to access the properties of myuser object

}

Object.setPrototypeOf(myuser,newuser)

// console.log(myuser.city)
// console.log("myuser",myuser.name)
// console.log("newuser",newuser.username) 
// there is also a modern way 

