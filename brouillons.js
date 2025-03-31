const container = document.querySelector('#weather-container')
const cityInput = document.querySelector("#cityInput");
const chargement = document.querySelector('#city');
const gps = document.querySelector('#gps');
const temperature = document.querySelector('#temperature');
const miseAJour = document.querySelector('#details');
const upDateButton = document.querySelector('#update')

async function fetchProducts(demande = "") {

	const url = `https://nominatim.openstreetmap.org/search?q=${demande}&format=json&addressdetails=1&limit=1`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0].lat);
    console.log(data[0].lon);
    console.log("data.county")
    console.log(data)
    console.log(data[0].lat)
    gps.innerHTML=`
    <div id="gps">données Gps: lat ${data[0].lat} lon ${data[0].lon}`
    let lattitude = data[0].lat
    let longitude = data[0].lon
return ("sese")
  
    

}
async function weather () {
    fetchProducts(demande ="")
    console.log('cre',fetchProducts(demande))
// const url = `https://api.open-meteo.com/v1/forecast?latitude=${lattitude}&longitude=${longitude}&current=temperature_2m,precipitation,relative_humidity_2m`;
//     const response = await fetch(url);
//     const data = await response.json();
// console.log('gre')
//     console.log(data)

}

upDateButton.addEventListener("click", function () {

  const demande = cityInput.value.trim()

weather()

})
