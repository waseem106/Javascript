const user={
    name:'waseem',
    age:18,
    course:"JavaScript",
    courseInstructor:"Professor Hitesh"
}



// ? without writing user.name again and again we can destructure our object
// ?const {name,age,courseInstructor}=user
//as if we want to chane the name inside we can modify them
const {name,age,courseInstructor:instructor}=user

// console.log(name,age,instructor)   //it wil work same



//? additional in react we use props to pass data actually it is also a destructing
const navbar=({name,age})=>{
    console.log(`${name} is ${age} years old`)
}
const data={name:"waseem",age:"18"}
navbar(data)


const mydata=[234,34,234,234,4]
console.log(...mydata)


