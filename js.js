const key = 'ef96da28c0b9ea6b6981379b007079c7';
const url = 'https://api.openweathermap.org/data/2.5/'
const form = document.getElementById('form');
const input = document.getElementById('input');
const search = document.getElementById('search');
const iconHTML = document.getElementById('icon');
const temperatureHTML = document.getElementById('temperature');
const descriptionHTML = document.getElementById('description');
const speedHTML = document.getElementById('speed');
const cordHTML = document.getElementById('cord');
const humidHTML = document.getElementById('humid');

search.addEventListener('click', (e) => {
    e.preventDefault();
    const InputValue = input.value;
    weatherApp(InputValue);
});   

async function weatherApp(InputValue) {
    try{
        let datas = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${InputValue}&appid=${key}&units=metric`);

        datas = await datas.json();
        console.log(datas);
     

        iconHTML.innerHTML = `<img src="http://openweathermap.org/img/wn/${datas.weather[0].icon}.png" alt="Weather Icon" height="50px" widht="100px">`;
        temperatureHTML.innerHTML = `${Math.round(datas.main.temp)}°C`;
        descriptionHTML.textContent = `${datas.weather[0].description}`;;
        speedHTML.innerHTML = `</br> </br> Wind Speed: ${datas.wind.speed} m/s </br> Wind Degree: ${Math.round(datas.wind.deg)}`;
        cordHTML.innerHTML = ` </br> </br> Latitude: ${datas.coord.lat} </br> Longitude: ${datas.coord.lon}`;
        humidHTML.innerHTML = `</br> </br> Humidity: ${datas.main.humidity}% </br> Pressure: ${datas.main.pressure}`;
        
    }
  
    catch(error){   
        iconHTML.innerHTML = ``;
        temperatureHTML.innerHTML = ``;
        descriptionHTML.textContent = `Enter a city or a country again!!`;;
        speedHTML.innerHTML = ``;
        cordHTML.innerHTML = ` `;
        humidHTML.innerHTML = ``;
        console.log(error);
    }

}