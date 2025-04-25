function orderPizza(callback){

    console.log("pizza ordered")
    setTimeout(() => {
        console.log("Pizza is ready!!")
        callback()
    }, 2000);
}

orderPizza(function(){
    console.log("Eating Piza!!!!")
})