

const mydate=new Date()
console.log("my date",mydate)
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.getDay())
console.log(mydate.getFullYear())
console.log(mydate.getHours())
console.log(mydate.getTime())
console.log(mydate.getMonth())
console.log(mydate.getSeconds())


const myDateTime= new Date("2025-02-10T12:10:12Z")
console.log(myDateTime)


//date.parse() -> is used to parse the date into the seconds

const myDateTimeSeconds= Date.parse("2025-02-10T12:10:12Z")







// const specficDate=new Date(2025,3,10)
// console.log(specficDate)
// console.log(specficDate.getDate())//10
// console.log(specficDate.getFullYear())//2025
// console.log(specficDate.getDay())//4
// console.log(specficDate.getMilliseconds())
// console.log(specficDate.getTime())
// console.log(specficDate.getHours())

// console.log(specficDate.toString()) //Thu Apr 10 2025 00:00:00 GMT+0500 (Pakistan Standard Time)
// console.log(specficDate.toJSON()) 
// console.log(specficDate.toLocaleString()) //4/10/2025, 12:00:00 AM
// console.log(specficDate.toDateString()) // Thu Apr 10 2025
// console.log(typeof specficDate)
// console.log(specficDate.getTime())



//setting date
// let d = new Date();
// d.setFullYear(2030);
// d.setMonth(11); 
// d.setDate(25);
// console.log(d);





//time stamp 
// const myTimestamp=Date.now()
// console.log(myTimestamp)
