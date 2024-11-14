const inp = document.getElementById('inp');
const myForm = document.getElementById('myForm');
const far = document.querySelector('.far');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
// const city = inp.value;

myForm.addEventListener('submit',weather);

async function weather(e) {
    e.preventDefault();
    
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+inp.value+'&appid=50a7aa80fa492fa92e874d23ad061374');
    const data = await res.json();
    
    const temp = data.main.temp;
    const deg = temp-273.15;
    const cityName = data.name
    const humid = data.main.humidity;
    const windValue = data.wind.speed;
    
    
    far.innerHTML = `<span>${deg.toFixed(2)}°</span>`;
    city.innerHTML = `<span>${cityName}</span>`;
    humidity.innerHTML = `<span>${humid}%</span>`;
    wind.innerHTML = `<span>${windValue}km/h</span>`;
}