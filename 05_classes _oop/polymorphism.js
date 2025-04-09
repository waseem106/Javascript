// Base class: Animal
class Animal {
    makeSound() {
      console.log("Animal sound");
    }
  }
  

  class Cat extends Animal {
    makeSound() {
      console.log("Meow ");
    }
  }
  

  class Dog extends Animal {
    makeSound() {
      console.log("Woof ");
    }
  }
  
  
  function playAnimalSound(animal) {
    
    animal.makeSound();
  }
  
  
  const myCat = new Cat();
  const myDog = new Dog();
  
  playAnimalSound(myCat); 
  playAnimalSound(myDog); 
  