// let goodAnswer = 'Vatikanas'

// let input = prompt('Kokia yra mažiausia pasaulyje šalis?')

// if (input === goodAnswer) {
//     alert('Teisingai')
// } else {
//     alert('Rimati? Taigi Vatikanas!')
// }

let a = 10
let b = 11
let result = (a + b > 5) ? 'over' : 'below'
console.log(result)

let person = 'Director'
let message = (person === 'Employee') ? 'Hello' :
(person === 'Director') ? 'Greetings' :
(person === '') ? 'No Login' : '';
console.log(message)

let legalAge = 18
let clientAge = 25

if (clientAge === legalAge) {
    console.log('Client age is 20 years')
} else if (clientAge > legalAge) {
    console.log('Client age is over 20 years')
} else {
    console.log('Client age is below 20 years!')
}

let myName = 'Dovydas'

if (myName.length > 6){
    console.log('Ilgas vardas')
} else {
    console.log('')
}

let myAge = 25
if (myAge > 19 && myAge < 100){
    console.log('Adult')
} else if(myAge > 0 && myAge < 19){
    console.log('Child')
} else {
    console.log('Invalid age')
}

let car = 'Ford'
if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porshe'){
    console.log(car + ' priklauso VW Group')
} else if(car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce'){
    console.log(car + ' priklauso BMW Group')
} else {
    console.log(car + ' nepriklauso VW ar BMW Group\'s')
}

let longShortName = (myName.length < 5) ? 'Short name' : 'Long name'
console.log(longShortName)


let canDriveCant = (clientAge < 0 || clientAge > 120) ? console.log('Invalid Age') : 
(clientAge >= legalAge) ? console.log('Can Drive'):
console.log(canDriveCant)

let phone = 'iphone'
let isIphoneUser = phone === 'iphone'
console.log(isIphoneUser)

let ageDiap = 65
if(ageDiap >= 14 && ageDiap <= 90){
    console.log('True')
} else{
    console.log('False')
}

let ageOutOfDiap = 120
if(!(ageOutOfDiap >= 14 && ageOutOfDiap <= 90)){
    console.log('true')
} else{
    console.log('false')
}
