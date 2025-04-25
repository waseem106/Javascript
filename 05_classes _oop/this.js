function talk(){
    console.log(`Hi i am ${this.name}`)
}


talk()    //hi i am undefined

const obj1=
{   name:"waseem",
    talk
}

const obj2=
{   name:"ali",
    talk
}

obj1.talk()    //hi i am waseem
obj2.talk()    //hi i am ali



console.log("call")
talk.call(obj1)




talk.apply(obj1)
