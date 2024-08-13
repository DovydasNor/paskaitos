fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        const dogImg = document.querySelector('#dog-image img')
        dogImg.src = data.message
    })


    fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => {
            const catFact =  document.querySelector('#cats p')
            catFact.textContent = data.fact
        })

fetch('https://api.coincap.io/v2/assets/bitcoin')
        .then(res => res.json())
        .then(coinData => {
            const bitcoin = document.querySelector('#bit ul')
            const createLi = document.createElement('li')
                // coinData.data.forEach(coins =>{
                //createLi.textContent = coins.data
            createLi.textContent = `${coinData.data.name}, Price: $${parseFloat(coinData.data.priceUsd).toFixed(2)}`;
                bitcoin.append(createLi)
        })



const form = document.querySelector('#predictAge')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const findName = document.querySelector('#name').value
    const apiUrl = `https://api.agify.io?name=${findName}`


    fetch(apiUrl)
        .then(res => res.json())
        .then(data =>{
            const age = data.age
            const output = `${findName} age is ${age}`
            const ageOutput = document.querySelector('#ageOutput')
            ageOutput.textContent = output
        })
})

fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data =>{
        const randomImg = document.querySelector('#cardImg')
        randomImg.src = data.results[0].picture.large

        const randomName = document.querySelector('#about .name')
        randomName.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`

        const randomAge = document.querySelector('.age')
        randomAge.textContent = `${data.results[0].dob.age} years old`

        const randomEmail = document.querySelector('#card span')
        randomEmail.textContent = data.results[0].email
    })