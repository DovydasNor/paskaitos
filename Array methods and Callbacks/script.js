function alertName (vardas){
    // alert(vardas)
}
function consoleName (vardas){
    console.log(vardas)
}
function coreFunc (vardas, callback){
    let nameUpper = vardas.charAt(0).toUpperCase() + vardas.slice(1)
    callback(nameUpper)
}
coreFunc('dovydas', alertName)
coreFunc('dovydas', consoleName)


const cars = ["BMW", "VW", "Audi"]
cars.forEach((car, i) => console.log(i + ': ' + car))



let names = ["peTras", "Jonas", "aNTanaS"]
let newName = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
console.log(newName)



let ages = [1, 20, 5, 10, 22, 50, 40, 39];
let filteredAges = ages.filter(age => age >= 18) 
console.log(filteredAges)

let city = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai']
let findCity = city.find(byLetter => byLetter.includes('K'))
console.log(findCity)

let city1 = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai']
let findCity1 = city1.some(byLetter => byLetter.charAt(0) === byLetter.charAt(0).toLowerCase())
console.log(findCity1)

let city11 = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai']
let findCity11 = city11.every(byLetter => byLetter.charAt(0) === byLetter.charAt(0).toUpperCase())
console.log(findCity11)