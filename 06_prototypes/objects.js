const myobj={
    username:"waseem",
    islogin:true,
    class:"Mern"
}


console.log(Object.getOwnPropertyDescriptor(myobj,'username'))


Object.defineProperty(myobj,'username',{
    writable:false,
    enumerable:false,
})

console.log(Object.getOwnPropertyDescriptor(myobj,'username'))




Object.defineProperty(Math,'PI',{
    value:"1234234",
    writable:true
})

console.log(Math.PI)
console.log(Math.PI)