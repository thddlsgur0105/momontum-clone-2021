const API_KEY = "284daa9095f8d1d9bda69b401715f583";
const COORDS = "coords";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    }
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("error")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords(); // coords 정보를 직접 불러오기 & 저장하기
    } else {
        //getWeather ; coords 정보를 loeadedCoords 를 이용해 가져오기
    }
}

function init() {
    loadCoords(); // localStorage에 key: coords인 값이 있든 없든지간에 값을 호출하는 함수 
}

init();