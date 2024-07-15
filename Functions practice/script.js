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
let reverseStr = str => str.reverse()
console.log(reverseStr(['Labas']))