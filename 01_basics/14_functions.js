function sum(a,b)
{
    return a+b
}

console.log(sum(2, 4))




//rest operator will wrap up the things and give us array

function calculateCartPrice(...price){
    return price.reduce((total,value)=>{
        return total=total+value
    })
    
}
console.log(calculateCartPrice(2,4,4))




function testingScope()
{
    var num=12
    let num2= 20
    const num3=30

}

// console.log(num)
// console.log(num2)
// console.log(num3)