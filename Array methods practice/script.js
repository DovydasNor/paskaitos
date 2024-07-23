// Add elements:
let arr = [1,2,3]
function addElement (item){
    arr.push(item)
    return arr
}
console.log(addElement(4))

// 2 arrays in to 1:
function combine (array, ...elements){
    let combined = array.concat(elements)
    return combined
}
console.log(combine(arr, 5, 6, 7))

// Add multiple elements:
function addMultiEle (arrays, ...element){
    let multiArr = [...arrays, ...element]
    return multiArr
}
console.log(addMultiEle(arr, 8, 9, 10))

//  Array elements multiplication:
function doubleNumbers (){
    let mlt = arr.map((x) => x * 2)
    return mlt
}
console.log(doubleNumbers())

// Find unique:
let notUnique = [1, 2, 2, 3, 4, 4, 5]
let unique = notUnique.filter((item, i, ar) => ar.indexOf(item) === i)
console.log(unique)

// drive allowed or not:
let itemsWeight = [30, 70, 90]
let planTrip = itemsWeight.reduce((sum, num) => num + sum) <= 200
console.log(planTrip)

// Restaurant queue optimize by order size:
let queue = [
    { id: 1, size: 5 },
    { id: 2, size: 3 },
    { id: 3, size: 8 },
]
let optimizeQueue = (orders) => orders.sort((a, b) => a.size - b.size).map(order => order.id)
console.log(optimizeQueue(queue))

// Find most frequent:
let frequent = [3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3]
let findMostFrequent = arr => arr.sort((a, b) => arr.filter(c => c === a).length - arr.filter(c => c === b).length).pop()
console.log(findMostFrequent(frequent))

// Find missing number:
let numbers = [1, 2, 3, 4, 5, 6]
let findMissingNumber = arr => {
    let n = arr.length + 1
    let sum = (n * (n + 1) / 2)
    let realSum = arr.reduce((acc, curr) => acc + curr)
    return sum - realSum
}
console.log(findMissingNumber(numbers))

// Chess table generator
let generateChessBoard = (size) => {
    let board = []
    for (let i = 0; i < size; i++){
        let row = []
        for (let j = 0; j < size; j++){
            row.push((i + j) % 2 === 0 ? 'W' : 'B')
        }
        board.push(row)
    }
    return board
}
console.log(generateChessBoard(5))