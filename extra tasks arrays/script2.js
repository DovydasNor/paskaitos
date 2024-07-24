// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']


// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
let = array = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log('Part 2')
console.log(array)
// 2.1. Gauti pirmą masyvo narį.
let task21 = array.slice(0, 1)
console.log('task21')
console.log(task21)

// 2.2. Gauti paskutinį masyvo narį.
let task22 = array.slice(26)
console.log('task22')
console.log(task22)

// 2.3. Gauti antrą masyvo narį.
let task23 = array.slice(1, 2)
console.log('task23')
console.log(task23)

// 2.4. Gauti priešpaskutinį masyvo narį.
let task24 = array.slice(25, 26)
console.log('task24')
console.log(task24)

// 2.5. Gauti aštuntą masyvo narį.
let task25 = array.slice(7, 8)
console.log('task25')
console.log(task25)

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let task26 = array.slice(-9, -8)
console.log('task26')
console.log(task26)

// 2.7. Gauti vidurinį masyvo narį.
let middleIndexx = Math.floor(array.length / 2)
let task27 = array.slice(13, 14)
console.log('task27')
console.log(`Vidurio indexas: ${middleIndexx}`)
console.log(task27)

// 2.8. Gauti pirmus tris masyvo narius.
let task28 = array.slice(0, 3)
console.log('task28')
console.log(task28)

// 2.9. Gauti paskutinius tris masyvo narius.
let task29 = array.slice(24, 27)
console.log('task29')
console.log(task29)

// 2.10. Gauti pirmus 10 masyvo narius.
let task210 = array.slice(0, 10)
console.log('task210')
console.log(task210)

// 2.11. Gauti paskutinius 10 masyvo narius.
let task211 = array.slice(17, 27)
console.log('task211')
console.log(task211)

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let task212 = array.slice(3, 9)
console.log('task212')
console.log(task212)

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let task213 = array.slice(-24, -19)
console.log('task213')
console.log(task213)

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let task214 = array.slice(10, 19)
console.log('task214')
console.log(task214)

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let task215 = array.slice(-17, -8)
console.log('task215')
console.log(task215)

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let task216 = array.slice(1, 27)
console.log('task216')
console.log(task216)

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let task217 = array.slice(0, 26)
console.log('task217')
console.log(task217)

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let task218 = array.slice(4, 27)
console.log('task218')
console.log(task218)

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let task219 = array.slice(0, 22)
console.log('task219')
console.log(task219)

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let slice1 = array.slice(0, 12)
let slice2 = array.slice(13, 14)
let task220 = slice1.concat(slice2)
console.log('task220')
console.log(task220)

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let task221 = array.slice(14, 27)
console.log('task221')
console.log(task221)

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let task222 = array.slice(1, 26)
console.log('task222')
console.log(task222)

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let task223 = array.slice(5, 24)
console.log('task223')
console.log(task223)

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let task224 = array.slice(1, 19)
console.log('task224')
console.log(task224)

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let task225 = array.slice(7, 26)
console.log('task225')
console.log(task225)

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let task226 = array.slice(9, 15)
console.log('task226')
console.log(task226)

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let task227 = array.slice(11, 20)
console.log('task227')
console.log(task227)

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let task228 = array.slice(8, 20)
console.log('task228')
console.log(task228)

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let slice12 = array.slice(0, 5)
let slice22 = array.slice(21, 27)
let task229 = slice12.concat(slice22)
console.log('task229')
console.log(task229)

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let slice13 = array.slice(2, 6)
let slice23 = array.slice(14, 17)
let task230 = slice13.concat(slice23)
console.log('task230')
console.log(task230)