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