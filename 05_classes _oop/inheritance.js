//  to extend class we use extend() and for construnctor use super()


class Player{

    #skill;  
    _weapon="firegun"
    constructor(name,health,skill,weapon){
        this.name=name;    
        this.health=health
        this.#skill=skill
        this._weapon=weapon
    }
    
    static Details(){
        console.log(`Player registers with me are ${this.name}`)
    }

    attack(){     //instance method
        console.log(`${this.name} attacks!!`)
        this.power()
        
    }
    power()
    {
        console.log(`${this.name} health is ${this.health}`)
    }

    showSkill()
    {
        console.log(`${this.name} skill is ${this.#skill}`)
    }

}


class Vehicle extends Player{

    constructor(name,health,skill,model)
    {
        super(name,health,skill)
        this.model=model
    }

    details(){
        console.log(`${this.name} has health ${this.health} and model is ${this.model}`)
    }

}


const corola=new Vehicle("corola","100","Fast","2024")
corola.details()
corola.power()
corola.showSkill()
console.log(corola._weapon)





class A {
    greet() {
      console.log('A greet');
    }
  }
  
  class B extends A {
    greet() {
      console.log('B greet');
    }
  }
  
  class C extends B {
    greet() {
      super.greet();
      console.log('C greet');
    }
  }
  
  const c = new C();
  c.greet();            //what will it do that is tricky question 
                        // b grret and c greet will be the output 



function Foo() {}
Foo.prototype.x = 10;

const a = new Foo();
const b = new Foo();

a.x = 20;

console.log(a.x);    //20  created new property it will not update the prototype property 
console.log(b.x);       //10
console.log(a.__proto__.x); //10
console.log(a.__proto__.x=34); //10

console.log(Foo.prototype.x); // 10








//objects can also be inherited 

const myObj={
    talk(){
        console.log("Heloo world")
    }
}


const newObj=Object.create(myObj)
newObj.talk() //Hello world



// _proto_ is an object that is pointing to the parent from which that object is created or inherited
//thinks it like a dna that is pointing out its parent
// when we create a object without explicitly inherting the object in normal way js internally conects your object with the Object.prototype automatically so that why we see proto even if we donot inherit it 
//but if we want to create it without inherting can we use create with null

// can we create a object that has no __proto__

const newObj2=Object.create(null)
newObj2.name="waeem"
console.log(newObj)