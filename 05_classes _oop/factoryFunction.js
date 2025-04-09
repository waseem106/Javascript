// A factory function is just a normal function that returns a new object. No new keyword, no this. It gives you more control — and avoids some pitfalls of this.


// Returns a new object manually

// Doesn’t use new or this

// Gives you a fresh object every time


function createPlayer(name, health) {
    return {
      name,
      health,
      attack() {
        console.log(`${name} attacks with ${health} health`);
      }
    };
  }
  
  const p1 =createPlayer("Superman", 100);
  const p2=createPlayer("Batman",200)
  p1.attack();
  p2.attack() 
  console.log(p1)
  console.log(p2)
  