const findCity = document.querySelector('#findCity')

findCity.addEventListener('submit', (event) =>{
    event.preventDefault()

    const searchCity = document.querySelector('#city').value
    const outputPar = document.querySelector('#cityOutput')
    const cityOutput = getCity(searchCity)
    cityOutput.then(cityText =>{
        outputPar.textContent = cityText
    })

   
})

function getCity(city) {
    const weatherApiUrl = `https://api.weatherbit.io/v2.0/current?key=cfef4754224d48a2b3f7b1cd3e8bad7d&city=${city}`

    const output = new Promise((resolve) => {
        fetch(weatherApiUrl)   
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const cityName = data.data[0].city_name
                resolve(`Weather in ${cityName}, ` + data.data[0].country_code)
                const tempPar = document.querySelector('#temp')
                tempPar.textContent = data.data[0].temp + '°C'
                const sky = document.querySelector('#sky')
                sky.textContent = data.data[0].weather.description
                const icon = data.data[0].weather.icon   
                const skyImg = document.querySelector('#skyImg')  
                skyImg.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`  
                const windSpd = document.querySelector('#windSpd')
                windSpd.textContent = `Wind speed: ` + data.data[0].wind_spd
                const humidity = document.querySelector('#humidity')
                humidity.textContent = `Humidity: ` + data.data[0].rh
                const sunRise = document.querySelector('#rise')
                sunRise.textContent = `Sunrise: ` + data.data[0].sunrise
                const sunSet = document.querySelector('#set')
                sunSet.textContent = `Sunset: ` + data.data[0].sunset
            })
    })

    return output
}

function fetchWeatherData(latitude, longitude){
    fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=cfef4754224d48a2b3f7b1cd3e8bad7d`)
    .then(res => res.json())
    .then(data => {

        const sunrise = data.data[0].sunrise
        const sunset = data.data[0].sunset
        updateBackgroundImage(sunrise, sunset)
    })
}

function updateBackgroundImage(sunrise, sunset) {

const now = new Date()

const sunriseTime = new Date(now.toDateString() + ' ' + sunrise)
const sunsetTime = new Date(now.toDateString() + ' ' + sunset)


if (now >= sunriseTime && now < sunsetTime) {

    document.body.style.backgroundImage = 'url(img/cloud-shapes-with-blue-background.jpg)'
} else {

    document.body.style.backgroundImage = 'url(img/top-view-grey-clouds-arrangement.jpg)'
}


}
function getLocationAndFetchWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                console.log('Latitude:', latitude)
                console.log('Longitude:', longitude)

                fetchWeatherData(latitude, longitude)
            })
    }
}
getLocationAndFetchWeather()