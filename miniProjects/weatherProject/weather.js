

const search= document.querySelector('input[type="search"]')
const submit=document.querySelector('.submit')
const city=document.querySelector('#city')
const country1=document.querySelector('#country')
const temp=document.querySelector('#temp')


const  apiKey="57f2ce8486bfec96ca5a1ab01c905622"
const celsius = (kelvin) => (kelvin - 273.15).toFixed(1);

async function getweatherData(){

    try {
      let value =search.value
      console.log("Value from function",value)
      const response=  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`,{method:"GET"})
      if(!response.ok) throw "City not Found"
      const data=await response.json();
      console.log(data)
      const {name,sys:{country},weather,main}=data
      console.log({name,country,weather})
      city.innerHTML=name;
      country1.innerHTML=country;
      temp.innerHTML=`${weather[0].description} ${celsius(main.temp)}°C`
    

    } catch (error) {
        console.log("Error while getting weather data",error)
        const result=document.querySelector('.result')
        result.textContent="No Data Found"
    }


}

submit.addEventListener('click',function(){
    getweatherData()
})







 