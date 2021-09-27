const API_KEY = '8a11f163126ccf87149eee79a1a0f542';


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;

        });

}

function onGeoError() {
    alert(`can't find you`);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


const weatherimg = document.querySelector('#weatherImg');
console.log(weatherimg);
const image = "cloud.png";
weatherimg.src = `img/${image}`;
