const container = document.querySelector('#weather-container')
const cityInput = document.querySelector("#cityInput");
const chargement = document.querySelector('#city');
const gps = document.querySelector('#gps');
const temperature = document.querySelector('#temperature');
const miseAJour = document.querySelector('#details');
const upDateButton = document.querySelector('#update')

async function fetchCoordinates(demande = "") {

	const url = `https://nominatim.openstreetmap.org/search?q=${demande}&format=json&addressdetails=1&limit=1`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('longitude',data[0].lat);
    console.log('latitude',data[0].lon);
    console.log(data[0].name)
    chargement.innerHTML= data[0].name
    gps.innerHTML='lat: '+data[0].lat+'  ' +'lon:   '+ data[0].lon
    // temperature.innerHTML=data.current.temperature_2m
    let latitude = data[0].lat
    let longitude = data[0].lon
    fetchWeather(latitude,longitude)
    console.log('gre',latitude)
}


async function fetchWeather (latitude,longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,relative_humidity_2m`;
    const response = await fetch(url);
    const data = await response.json();
    // const reponse = data.current.temperature_2m
    // return reponse
    temperature.innerHTML=data.current.temperature_2m
    console.log('temp',data.current.temperature_2m)
}

upDateButton.addEventListener("click", function () {
    const demande = cityInput.value.trim()
    fetchCoordinates(demande)
    console.log('gloup')
})
