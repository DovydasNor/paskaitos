let a = 10
let b = 44

console.log(a + b)

let year = 2024

console.log(year - 26)

let name = 'Dovydas'
let lastName = 'Norvydas'

console.log(`Mano vardas ir pavardė ${name} ${lastName}`)

let c = 10
let farenheitai = (c * 9 / 5) + 32

console.log(farenheitai)

let convert = 'Finansinės operacijos konvertavimas:'
let balance = 999.99
let increasedBalance = balance + (balance % 9)
let doubleBalance = 2 * increasedBalance
let decreaseBalance = increasedBalance - 50

console.log(convert)
console.log(`Pradinis balansas:  ${balance.toFixed(2)}`)
console.log(`Balansas po papildymo:  ${increasedBalance.toFixed(2)}`)
console.log(`Balansas po daugybos:  ${doubleBalance.toFixed(2)}`)
console.log(`Galutinis balansas:  ${decreaseBalance.toFixed(2)}`)