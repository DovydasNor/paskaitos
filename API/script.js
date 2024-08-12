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