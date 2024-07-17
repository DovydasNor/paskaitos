// string methods:
let convertToUpperCase = str => str.toUpperCase()
console.log(convertToUpperCase('labas'))

let extractSubstring = str => str.substring(2, 7)
console.log(extractSubstring('Sveikas pasauli'))

let capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
let stringCap = 'labas rytas, pasauli!'
let words = stringCap.split(' ').map(capitalizeFirstLetter)
let capitalizeString = words.join(' ')
console.log(capitalizeString)

let censorCursedWords = (text, cursedWords) => {
    let words = text
    for (let i = 0; i < cursedWords.length; i++){
        let curseWord = cursedWords[i]
        if (words.includes(curseWord)){
            words = words.replace(curseWord, '****')
        }
        return words
    }
    
}
console.log(censorCursedWords('laba laba Avada Kedavra', ['Avada Kedavra']))

// Number methods:
let milkPrice = price => {
    if(Number.isInteger(price) === true){
        alert(`Vartotojui smulkiu cetu neprireiks, pieno kaina: ${price.toFixed(2)}`)
    }
    else{
        alert(`Vartotojui smulkiu cetu prireiks, pieno kaina: ${price.toFixed(2)}`)
    }
    
}
milkPrice(2.01111)

let numb = [1, 2, 4, 5, 75, 98, 4, 66, 41, 0, 21, 3]
let findMax = (...numb) => Math.max(...numb)
console.log(findMax(...numb))

// Boolean methods
let isLegalAge = false
console.log(isLegalAge)
console.log(isLegalAge.toString())
