// arrow function donot bind their own this 
// they inherit this from their surronding lexaical scope(where the function is defined not called)
// surronding context could be window,class, an object, or a function



// ? Global scope 

const arrowFunction=()=>{
    // console.log(this)
}
arrowFunction()   //in browser it will give window object because function is defined in the window context 
                    // in node it will give {} object



// ? Inside a regular function
function outer()
{
    let name="waseem"
    const arrow=()=>{
        console.log(this)    //this will point to the global because the it is called in global scope
    }
    arrow()
}

// outer() 
outer.call({name:"waseem"}) //Now binding explicitly




// lets take another example to understand this thing 


    const obj=
    { 
        name:"waseem",
        obj2:{
            name:"waseem",
            talk2:()=>console.log(this)
        },
      
        talk:()=>{
                console.log(this)
            }
    }


    
    // obj.obj2.talk2.call({name:"waseem"})




    const person = {
        name: "Waseem",
        greet: function () {
          const arrow = () => {
            console.log(this.name);
          };
          arrow();
        }
      };
      
      person.greet(); // "Waseem"
      