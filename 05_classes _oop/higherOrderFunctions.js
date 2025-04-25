function sayName(name){
    return `hi i a a function ${name}`
}

function processInformation(callback){
    console.log(callback)
}


processInformation(sayName("Waseem"))