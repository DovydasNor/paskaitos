const findCity = document.querySelector('#findCity')

findCity.addEventListener('submit', (event) =>{
    event.preventDefault()

    const searchCity = document.querySelector('#city').value
    const outputPar = document.querySelector('#cityOutput')
    const cityOutput = getCity(searchCity)
    cityOutput.then(cityText =>{
        outputPar.textContent = cityText
    })

   
   
    // fetch(`http://api.weatherbit.io/v2.0/current?key=cfef4754224d48a2b3f7b1cd3e8bad7d&city=${city}`)
    // .then(res => res.json())
    // .then(data =>{
        
    // })

})

function getCity(city) {
    const weatherApiUrl = `http://api.weatherbit.io/v2.0/current?key=cfef4754224d48a2b3f7b1cd3e8bad7d&city=${city}`

    const output = new Promise((resolve) => {
        fetch(weatherApiUrl)   
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const cityName = data.data[0].city_name
                resolve(`Weather in ${cityName}`)
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
            })
    })

    return output
}

