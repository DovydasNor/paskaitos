let task1 = [2, 3, 4]
task1.unshift(1)
console.log(task1)

let task2 = [1, 2, 2, 3, 3, 3, 4]
let uniqueElements = []
for (let i = 0; i < task2.length; i++){
    if (!uniqueElements.includes(task2[i])){
        uniqueElements.push(task2[i])
    }
}
console.log(uniqueElements.length)

let task3 = [-3, 1, -2, 4, -5, 6]
let positiveNumbers = []
for (let i = 0; i < task3.length; i++){
    if(task3[i] > 0){
        positiveNumbers.push(task3[i])
    }
}
console.log(positiveNumbers)

let task4 = [1, 2, 3, 4, 3, 5]
let element = 3
let doesRepeat = task4.indexOf(element) !== task4.lastIndexOf(element)
console.log(doesRepeat)

let notTask4 = [1, 2, 3, 4, 5]
let notElement = 3
let doesNotRepeat = notTask4.indexOf(notElement) !== notTask4.lastIndexOf(notElement)
console.log(doesNotRepeat)

let task5 = [1, 2, 3, 4, 5]
let modifiedTask5 = []
for (let i = 0; i < task5.length; i++){
    let numb = task5[i]
    let modifiedNumb
    if (numb % 2 === 0){
        modifiedNumb = numb / 2
    }
    else{
        modifiedNumb = numb * 3
    }

modifiedTask5.push(modifiedNumb)
}
console.log(modifiedTask5)