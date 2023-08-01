window.addEventListener("load", function() {
    const apiKey = '3692da79e3cfaa5e10f5d9424c0bb66e';
    let search = '';
    let cityForm = document.getElementById("city-form");
    let cityInput = document.getElementById("city-input");
    let cityName = document.getElementById("city-name");
    let icon = document.getElementById("icon");
    let temp = document.getElementById("temp");
    let feel = document.getElementById("feel");
    let wind = document.getElementById("wind");

cityForm.addEventListener('submit', event =>{
    event.preventDefault();
    search = cityInput.value;




    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`)
.then(response =>response.json())
.then(data =>{
    cityName.innerHTML = data.name;
    temp.innerHTML = data.main.temp;
    feel.innerHTML = data.main.feels_like;
    wind.innerHTML = data.wind.speed;
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
})

})
})