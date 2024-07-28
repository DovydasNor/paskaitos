// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
console.log('Part 4')
let arr2 = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(arr2)

// 4.1. Tik skaičius (number tipo duomenis).
let arrNumb = []
for (let i = 0; i < arr2.length; i++){
    if(!isNaN(arr2[i])){
        arrNumb.push(arr2[i])
    } 
}
console.log('Task41')
console.log(arrNumb)

let arrNumbEach = []
arr2.forEach((array) => {
    if(!isNaN(array)){
        arrNumbEach.push(array)
    }
})
console.log(arrNumbEach)

// 4.2. Tik tekstą (string tipo duomenis).
let arrStr = []
for (let i = 0; i < arr2.length; i++){
    if(isNaN(arr2[i])){
        arrStr.push(arr2[i])
    } 
}
console.log('Task42')
console.log(arrStr)

let arrStrEach = []
arr2.forEach((array) => {
    if(isNaN(array)){
        arrStrEach.push(array)
    }
})
console.log(arrStrEach)

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
let arrNumbExpo = []
for (let i = 0; i < arr2.length; i++){
    if(!isNaN(arr2[i])){
    arrNumbExpo.push(arr2[i] ** 4)
    } 
}
console.log('Task43')
console.log(arrNumbExpo)

let arrNumbExpoMap = arr2.map((array) =>  array ** 4).filter((array) => !isNaN(array))
console.log(arrNumbExpoMap)

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
let arrNumbAdd = []
for (let i = 0; i < arr2.length; i++){
    if(!isNaN(arr2[i])){
    arrNumbAdd.push(arr2[i] + 55)
    } 
}
console.log('Task44')
console.log(arrNumbAdd)

let arrNumbAddMap = arr2.map((array) =>  array + 55).filter((array) => !isNaN(array))
console.log(arrNumbAddMap)

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
let arrNumbDiv = []
for (let i = 0; i < arr2.length; i++){
    if(!isNaN(arr2[i])){
    arrNumbDiv.push(arr2[i] / 2)
    } 
}
console.log('Task45')
console.log(arrNumbDiv)

let arrNumbDivMap = arr2.map((array) =>  array / 2).filter((array) => !isNaN(array))
console.log(arrNumbDivMap)

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
let arrNumbAddStr = []
for (let i = 0; i < arr2.length; i++){
    if(!isNaN(arr2[i])){
    arrNumbAddStr.push('Number: ' + arr2[i])
    } 
}
console.log('Task46')
console.log(arrNumbAddStr)

let newArrAdd = []
let arrNumbAddStrEach = arr2.forEach((array) =>{
    if(!isNaN(array)){
        newArrAdd.push('Number : ' + array)
    }
})
console.log(newArrAdd)

// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.
let arrNumbAddI = []
for (let i = 0; i < arr2.length; i++){
    if(!isNaN(arr2[i])){
        arrNumbAddI.push(`Index: ${i}, Number : ${arr2[i]}`)
    } 
}
console.log('Task47')
console.log(arrNumbAddI)

let newArrAddI = []
let arrNumbAddIEach = arr2.forEach((array, index) =>{
    if(!isNaN(array)){
        newArrAddI.push(`Index: ${index}, Number : ${array}`)
    } 
})
console.log(newArrAddI)
// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
let arrNumbMulti = []
for (let i = 0; i < arr2.length; i++){
    if(!isNaN(arr2[i])){
        arrNumbMulti.push(arr2[i] * [i])
    } 
}
console.log('Task48')
console.log(arrNumbMulti)

let arrNumbMultiMap = arr2.map((array, index) =>  array * index).filter((array) => !isNaN(array))
console.log(arrNumbMultiMap)

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".