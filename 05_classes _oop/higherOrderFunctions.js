function sayName(name){
    return `hi i a a function ${name}`
}

function processInformation(callback){
    console.log(sayName)
}


processInformation(sayName("Waseem"))