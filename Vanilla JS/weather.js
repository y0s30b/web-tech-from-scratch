const weather = document.querySelector(".js-weather");

const API_KEY = "0595766797e2fc235fedddad77651b3d";
const COORDS = 'coords';

function getWeather(latitude, longitude){
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        //console.log(response.json());
        return response.json();
    }).then(function(data){
        //console.log(json);
        const temperature = data.main.temp;
        const place = data.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
    // fetch().then(): 함수를 데이터가 넘어왔을 때 호출
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    //console.log(position.coords);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        /*latitude: latitude,
        longitude: longitude*/
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("cannot access geo location");
}

function askForCoords(){
    // navigator api 사용
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        //
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
        //console.log(parseCoords);
    }
}



function init(){
    loadCoords();
}

init();