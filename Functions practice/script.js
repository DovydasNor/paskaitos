// m/s to km/h:
let convertMsToKmH = (ms) => ms * 3.6
console.log(convertMsToKmH(2))

// Compare Number:
function compareNumbers (n1, n2){
    let equal = n1 === n2
    let more = n1 > n2
    let nan = isNaN(n1) === true || isNaN(n2) === true

    if(equal){
        return 'Lygūs'
    }
    else if(more){
        return n1
    }
    else if(nan){
        return 'Ivestis privalo buti skaiciai'
    }
    else{
        return n2
    }
}
console.log(compareNumbers(2, 3))

// Leap year
let isLeapYear = year => year % 4 === 0
console.log(isLeapYear(2028))

// Biggest number in array:
function findMaxInArray(array){
    let arr = array[1, 3, 2, 5, 4]
    for (let i = 1; i < array.length; i++){
        if(array[i] > arr){
            arr = array[i]
        }
    }
    return arr
}

console.log(findMaxInArray([1, 3, 2, 5, 4]))

// Array sum:
function sumArray (array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}

console.log(sumArray([1, 2, 3, 4, 5]))

// Compare array's:
function compareArrays (ar1, ar2){
    let equalLength = ar1.length !== ar2.length

    if(equalLength){
        return false
    }

    for (let i = 0; i < ar1.length; i++){
        if(ar1[i] !== ar2[i]){
            return false
        }
    }

    return true
}

console.log(compareArrays([1, 2, 3], [1, 2, 3]))
console.log(compareArrays([1, 2, 3], [1, 2, 4]))

// Reverse string:

// METHOD 1
function reverseStr (str){
    let splitStr = str.split('')
    let reversArr = splitStr.reverse()
    let joinArr = reversArr.join('')
    return joinArr
}

console.log(reverseStr('Labas'))

// METHOD 1 ALTERNATIVE
function reverseStr1 (str){
    return str.split('').reverse().join('')
}

console.log(reverseStr1('Hello'))

// METHOD 2
function reverseStr2 (str){
    let string = ''
    for (let i = str.length - 1; i >= 0; i--){
        string += str[i]
    }
    return string
}
console.log(reverseStr2('Dovydas'))

// METHOD 3
function reverseStr3 (str){
    if(str === ''){
        return ''
    }
    else{
        return reverseStr3(str.substring(1)) + str.charAt(0)
    }
}

console.log(reverseStr3('Ledai'))

// Palindromas ???
let arPalindoras = str => str.includes('Palindromas')
console.log(arPalindoras(' asfasf Palindromas sdf'))

// Pyramid
let pyramid = (height) => {
    for (let i = 1; i <= height; i++){
        let line = ''
        for (let j = 0; j < i; j++){
            line += i
        }
        console.log(line)
    }
    
}

console.log(pyramid(4))