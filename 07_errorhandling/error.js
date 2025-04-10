function myFunction(num){
try {
    let tempstring=String(num)
    if(tempstring.trim()==="") throw "Input Cannot be Empty"
    else if(!Number.isNaN(num)) throw "Strings are not allowed"
    else if(num<0) throw "Enter Poistive Number"
    else console.log("The valid number you entered is ",num) 
    
} catch (error) {
    console.log(error)
}finally{
    console.log("Function ends!!!!")
}
}


myFunction("23423")