const promiseOne= new Promise(function(resolve,reject){
    // Do async tasks
    // Db calls, network tasks
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()    //it will connect resolve to then()
    }, 1000);
})


promiseOne.then(function(){
    console.log("Promise consumed")
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 consumed")
})




// lets make 3rd promise and pass some data to it

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"waseem",city:"Gujranwala"})
    },1000)
})

promise3.then(function(user){
    console.log(user)
})




const promise4=new Promise(function(resolve,reject){

setTimeout(() => {
    let Error=false
    if(!Error)
    {
        resolve({username:"waseemaziz",city:"Guj"})
    }else
    {
        reject('Error:Something went wrong ')
    }
}, 1000);

})



promise4.then(function(user){
    console.log("Promise 4",user)
    let newdata="new data added"
    return newdata 
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Finally the promise either resolve or rejected")
})




const promise5 =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Javascript",password:"12345"})
        }else{
            reject('Error:Js went wrong')
        }

    },1000)
})


async function resolvePromisefive(){
    try {
    const response=await promise5
    console.log(response)
    } catch (error) {
        console.log(error)
    }
    
}

resolvePromisefive()





async function getPublicApi(){
    try {
        const url="https://randomuser.me/api/"
        const response= await fetch(url)
        console.log("public response",response)
        const data=await response.json()
        console.log("public data",data)
    } catch (error) {
        console.log(error)
    }
}

getPublicApi()