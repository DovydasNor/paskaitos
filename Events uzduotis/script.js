const main = document.querySelector('body')

const button1 = document.querySelector('button')
button1.addEventListener('click', () => {
    alert('Dovydas')
})


const button2 = document.createElement('button')
  button2.textContent = 'Abuot Me'
button2.addEventListener('click', () => {
    const par = document.createElement('p')
    par.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi laborum delectus sit culpa soluta maiores iusto nostrum necessitatibus, facere amet dolores fugit eligendi quas rerum dolorum! Quaerat, reprehenderit maxime?'
    main.append(par)
})

const h1Element = document.createElement('h1')
const number = 6
let nNumber = number
const buttonPlus1 = document.createElement('button')
const randomButton = document.createElement('button')
randomButton.textContent = 'random number'
const createH1 = document.createElement('h1')
const legalAgeButton = document.createElement('button')
legalAgeButton.textContent = 'Turiu bent 18 metų'
const not18 = document.createElement('button')
not18.textContent = 'Mažiau nei 18 metų'

main.append(button2, h1Element, buttonPlus1, randomButton, createH1, legalAgeButton, not18)

h1Element.textContent = number
buttonPlus1.textContent = '+ 1'
buttonPlus1.addEventListener('click', () =>{
    nNumber = nNumber + 1
    h1Element.textContent = nNumber
})

const noCopy = document.querySelector('.noCopy') 
noCopy.addEventListener('copy', (e) => {
    e.preventDefault()
    alert('NO COPY')
})

randomButton.addEventListener('click', () =>{
    
    const randomNumber = Math.floor(Math.random()* 100) + 1
    createH1.textContent = randomNumber
})

legalAgeButton.addEventListener('click', () =>{
    const parAlus = document.createElement('h1')
    parAlus.textContent = 'Alus'
    main.append(parAlus)
})
not18.addEventListener('click', () =>{
    alert('nepilnametis - nieko neturim')
})