// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
let array = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]
console.log(array)
// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.

// 1.1. Pašalinti pirmą masyvo narį.
let task11 = array.shift()
console.log('task11')
console.log(task11)
console.log(array)
// 1.2. Pašalinti paskutinį masyvo narį.
let task12 = array.pop()
console.log('task12')
console.log(task12)
console.log(array)

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
let middleIndex = Math.floor(array.length / 2)
let task13 = array.splice(10, 1)
console.log('task13')
console.log(task13)
console.log(array)

// 1.4. Pašalinti priešpaskutinį masyvo narį.
let task14 = array.splice(18 , 1)
console.log('task14')
console.log(task14)
console.log(array)

// 1.5. Pašalinti antrą masyvo narį.
let task15 = array.splice(1, 1)
console.log('task15')
console.log(task15)
console.log(array)

// 1.6. Pašalinti 7 ir 8 masyvo narius.
let task16 = array.splice(6, 2)
console.log('task16')
console.log(task16)
console.log(array)

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
let task17 = array.splice(-7, 3)
console.log('task17')
console.log(task17)
console.log(array)

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
let task18 = array.splice(2, 1, 888)
console.log('task18')
console.log(task18)
console.log(array)

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
let task19 = array.splice(9, 1, 33, 789, 6543)
console.log('task19')
console.log(task19)
console.log(array)

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
let task110 = array.splice(14, 1, 321, 654, 987)
console.log('task110')
console.log(task110)
console.log(array)

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
let task111 = array.splice(1, 0, 11)
console.log('task111')
console.log(task111)
console.log(array)

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
let task112 = array.splice(13, 0, 1)
console.log('task112')
console.log(task112)
console.log(array)

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
let task113 = array.splice(18, 0, -1)
console.log('task113')
console.log(task113)
console.log(array)

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
let task114 = array.unshift(1, 2, 3)
console.log('task114')
console.log(task114)
console.log(array)

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
let task115 = array.push(-333, -321, -312)
console.log('task115')
console.log(task115)
console.log(array)

// 1.16. Į masyvo vidurį pridėti skaičių 0.
let newMiddleIndex = array.length / 2
let task116 = array.splice(13, 0, 0)
console.log('task116')
console.log(task116)
console.log(array)

 
// 1.17. Pašalinti pirmą masyvo narį.
let task117 = array.shift()
console.log('task117')
console.log(task117)
console.log(array)

// 1.18. Pašalinti paskutinį masyvo narį.
let task118 = array.pop()
console.log('task118')
console.log(task118)
console.log(array)

// 1.19. Į masyvo pradžią pridėti žodį "start".
let task119 = array.splice(0, 0, 'start')
console.log('task119')
console.log(task119)
console.log(array)

// 1.20. Į masyvo pabaigą pridėti žodį "end".
let task120 = array.push('end')
console.log('task120')
console.log(task120)
console.log(array)


// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log('Testing answer:')
let arrAnswer = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
if(array.toString() === arrAnswer.toString()){
    console.log('Teisingai')
}else{
    console.log('Ieškok klaidų')
}