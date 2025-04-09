class Player{

    
    #skill;   //private property
    _weapon;  //protected property(not supported in js but conventionally) accesible from subclases  not outside classes
    constructor(name,health,skill){
        this.name=name;    //public property Default behavior
        this.health=health
        this.#skill=skill
    }

    //methods -> instance vs static methods
    // instance methods work on object created by class 
    //static method works on the class itself not by its instances

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


const obj1=new Player("waseem",100,"Fly")
const obj2=new Player("ali",80,"Swimming")
obj1.attack()
obj2.attack()
obj1.showSkill()
console.log(obj1.name)
console.log(obj1.health)
console.log(typeof obj1)

Player.Details()