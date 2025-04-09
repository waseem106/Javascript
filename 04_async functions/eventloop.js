
async function placeOrder() {
    console.log("Placing the order for coffee...");
  
    let beansReady = await getBeans(); 
  
    console.log("Making the coffee with beans!");
    console.log("Coffee is ready!")

  }
  
  function getBeans() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Beans are ready!");
        resolve(true); 
      }, 2000);
    });
  }
  
  placeOrder(); 
  




  new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("response runs at ",Date.now().toLocaleString())
        resolve(true)
    },0)
    console.log("after time out",Date.now().toLocaleString())    //this will run first beacuse it is sync code and will be added directly to the call stack 
  })
