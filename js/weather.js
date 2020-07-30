const weather = document.querySelector('.js-weather');
const API_KEY = "b8dbfe24ff72d50050db7e51e0dd5b77";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude; //위도 설정
    const longitude = position.coords.longitude; //경도 설정
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj); // 위치(위도,경도) 정보를 저장하는 saveCoords 함수 호출.
    getWeather(latitude, longitude); //위도,경도 값으로 날씨 데이터를 가져오는 getWeather 함수 호출.
}

//좌표 요청 거부 시 호출되는 함수.
function handleGeoError(){
    alert(`Can't access geo location`);
    console.log(`Can't access geo location`);
}

//좌표를 요청하는 함수.
function askForCoords(){
    //유저의 현재 위치를 브라우저에게 요청하며, 수락할 경우 hadnleGeoSuccess 호출, 거부할 경우 handleGeoError 호출
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);

}
//로컬스토리지 coord 키의 값이 비어있으면 좌표 요청
function loadedCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords ===null){  //만약 로컬스토리지에 coords key value가 없으면?
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadedCoords();
}

init();