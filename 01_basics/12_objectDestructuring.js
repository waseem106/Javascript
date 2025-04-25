

//! Note Destructring is actually a shallow copy of the object 







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





const original = { name1: 'waseem', age1: 24, address: { city: 'Gujranwala' } };

const [name1,age1,address,city]=original
console.log(name1,age1,address,city)


const user2 = {
    info: {
      personal: {
        fullName: "Waseem Aziz",
        age: 24
      }
    }
  };

  

  const {info:{personal:{fullName}}}=user
  console.log(fullName)




  const data2 = {
    user4: {
      id: 7,
      profile: {
        name3: "waseem",
        settings: {
          theme: "dark"
        }
      }
    }
  };
  
const { user4 } = data2

  const{user4:{id,profile:{name3,settings:{theme}}}}=data2

  console.log(id)
  console.log(name3)
  console.log(theme)