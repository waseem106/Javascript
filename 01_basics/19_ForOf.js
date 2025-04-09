// The JavaScript for of statement loops through the values of an iterable object.
// for of loop can be used  arrays, strings, 

const myArray=["apple","mango","grapes"]

for (const value of myArray) {
    console.log(value)
}




const myObj={
    name:"waseem",
    course:"IT"
}

// for (let obj of myObj) {
//     console.log(obj)
// }



// The JavaScript for in statement loops through the properties of an Object:

for (const[key,value] in myObj) {
   console.log(myObj[key])
}


const newArray=[
    {name:"waseem",
     city:"Gujranwala"
    },
    {name:"Ali",
    city:"Gujranwala"
   },
   {name:"Usman",
   city:"Gujranwala"
  }
]


newArray.forEach((item)=>{
    console.log(item.city)
})