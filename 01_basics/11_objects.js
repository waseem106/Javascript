// * defining a object in js
//using object literal 
//using the new keyword




const mySymbol=Symbol("key1")

//* object literals
const user={
    name:"waseem",
    age:12,
    email:"waseemaziz@devsloop.com",
    [mySymbol]:"key2"    
}


//*using the new keyword
const car =new Object()
//inserting values into it
car.name="honda"
car.model="2025"
// console.log(car)


//*using the object constructor
const bike={}
bike.model="2024"
// console.log(bike)

// * if we want that our value should not be changed we can freeze object
// Object.freeze(user)

//* there are two ways to access the object by using . and []

// console.log(user.age)
// console.log(user["age"]);
// console.log(user[mySymbol])
user.name="ali"
user.extra="details"   //adding new property to the object once we decalred it 
//?we can delete the property of object also using delete
//? keyword deletes both the value of the property and the property itself.
delete user.name
user.greeting=function(){
    // console.log(`Welcome ${this.name}`)  //?we use string interpolition to add new values to it 
                        //this is used to refer the current object 

}

user.name="hamza"
// console.log(user.extra)
// console.log(user["name"])
// console.log(user.greeting())
console.log(user)





//? !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Additional !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
                firstname:"waseem",
                lasatname:"aziz"
        }
    }
}


// console.log(regularUser?.fullname?.userfullname?.firstname)




// * Merging objects 

const obj1={1:"a",2:'b'}
const obj2={3:"a",4:'b'}

//! const obj3={obj1,obj2}  /?{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//? it makes nested object donot pass the propeties for that we will use Object.assign()

    
// const obj3=Object.assign({},obj1,obj2)


// * Another Method to merge objects is spread operator ...obj
const obj3={...obj1,...obj2}         //same result in most cases we are going to use this 
                
//console.log(obj3) //?{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }




// * one more concept when we recieved data from the database we mostly gets arrays of object 
// we will learn to iterate those arrays

const userData=[
    {
        name:"Waseem",
        email:"waseem@gmail.com"
    },
    {
        name:"ali",
        email:"ali@gmail.com"
    },
    {
        name:"hamza",
        email:"hamza@gmail.com"
    }
]

//?  accessing by index
// console.log(userData[0])
// console.log(userData[1])
// console.log(userData[2])


// ? we studied two methods Array.keys() and Arrays.entries()
// ? we will try to use those now 
// console.log("Entries")
for(let x of Object.entries(userData))
{
    // console.log(x)
}

// console.log(Object.keys(userData))  //? we can directly console the keys
// console.log(Object.values(userData))  //? we can directly access the values
// console.log(userData.hasOwnProperty('name'))  //? it checks is there any propety present in the object