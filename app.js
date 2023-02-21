const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
//    const API = `https://api.openweathermap.org/data/2.5/weather? q=${city}&appid=${API_KEY}&units=metric`
//       const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

//creating funcyion name getweather
const getweather=async(city)=>{
    weather.innerHTML=`
    <h2>Loading.....<h2/>
    `
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response=await fetch(url);
   
    const data=await response.json();
    console.log(data);
return showWeather(data);
}
const showWeather=async(data)=>{
    if(data.cod==404){
        weather.innerHTML=`
        <h2>Nothing is found<h2/>
        `
        return;
    }
    weather.innerHTML=`
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h2>${data.main.temp} ℃</h2>
    <h4> ${data.weather[0].main} </h4>
    <h4>Minimum Temprature</h4>
    <h3> ${data.main.temp_min} ℃ </h3>
</div>
    `
}
      const form=document.querySelector("form");
      const search=document.querySelector("#search");
      const weather=document.querySelector("#weather");
      form.addEventListener("submit",function(event){
        // console.log(search.value);
       getweather(search.value);
        event.preventDefault();
      })