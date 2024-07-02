let name = 'Dovydas'
console.log(name == name)

const number = '10'
const text = 10
console.log(number == text)
console.log(number != text)
console.log(number >= text)

const currentBalance = 50
const transaction1 = 51
const transaction2 = 50
const transaction3 = -50
const transaction4 = -51

const result = currentBalance + transaction3 >= 0
const result2 = currentBalance + transaction2 >= 0
const result3 = currentBalance + transaction4 >= 0
const result4 = currentBalance + transaction1 >= 0

console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)


const number1 = 3
const number2 = 55
const result5 = number2 % number1 === 0
console.log(result5)