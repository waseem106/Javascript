// closure is whent the function remembers variables from the scope it was created in even after the scope has closed

function outer() {
    let count = 0;
  
    return function inner() {
      count++;
      console.log(count);
    };
  }
  
  const fn = outer();
  fn(); // 1
  fn(); // 2
  fn(); // 3
  