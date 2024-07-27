// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log(`Part 3`)

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
let arr = ['startt', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(arr)

// 3.1. Gauti tik teigiamus skaičius.
let task31 = arr.filter((array) => array >= 0)
console.log('task31')
console.log(task31)

// 3.2. Gauti tik neigiamus skaičius.
let task32 = arr.filter((array) => array < 0)
console.log('task32')
console.log(task32)

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let task33 = arr.filter((array) => array % 2 === 0)
console.log('task33')
console.log(task33)

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let task34 = arr.filter((array) => array % 3 === 0)
console.log('task34')
console.log(task34)

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let task35 = arr.filter((array) => array % 5 === 0)
console.log('task35')
console.log(task35)

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let task36 = arr.filter((array) => array % 6 === 0)
console.log('task36')
console.log(task36)

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let task37 = arr.filter((array) => array % 31 === 0)
console.log('task37')
console.log(task37)

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let task38 = arr.filter((array) => array % 5 === 0 && array % 3 === 0)
console.log('task38')
console.log(task38)

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let task39 = arr.filter((array) => array % 3 === 0 && array % 7 === 0)
console.log('task39')
console.log(task39)

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let task310 = arr.filter((array) => array % 5 === 0 && array % 9 === 0)
console.log('task310')
console.log(task310)

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let task311 = arr.filter((array) => array % 5 === 0 && array % 11 === 0)
console.log('task311')
console.log(task311)

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let task312 = arr.filter((array) => array % 2 === 0 && array % 8 === 0 && array % 12 === 0)
console.log('task312')
console.log(task312)

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let task313 = arr.filter((array) => array % 2 === 0 || array % 3 === 0)
console.log('task313')
console.log(task313)

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let task314 = arr.filter((array) => array % 3 === 0 || array % 5 === 0)
console.log('task314')
console.log(task314)

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let task315 = arr.filter((array) => array % 2 === 5 || array % 6 === 0)
console.log('task315')
console.log(task315)

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let task316 = arr.filter((array) => array % 7 === 0 || array % 8 === 0)
console.log('task316')
console.log(task316)

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let task317 = arr.filter((array) => array % 9 === 0 || array % 13 === 0)
console.log('task317')
console.log(task317)

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let task318 = arr.filter((array) => array % 2 === 0 || array % 3 === 0 || array % 5 === 0)
console.log('task318')
console.log(task318)

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let task319 = arr.filter((array) => array % 5 === 0 || array % 7 === 0 || array % 9 === 0)
console.log('task319')
console.log(task319)

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let task320 = arr.filter((array) => array % 7 === 0 || array % 8 === 0 || array % 11 === 0)
console.log('task320')
console.log(task320)

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let task321 = arr.filter((array) => array % 9 === 0 || array % 12 === 0 || array % 13 === 0)
console.log('task321')
console.log(task321)

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let task322 = arr.filter((array) => array > 100)
console.log('task322')
console.log(task322)

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let task323 = arr.filter((array) => array > 555)
console.log('task323')
console.log(task323)

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let task324 = arr.filter((array) => array >= 888)
console.log('task324')
console.log(task324)

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let task325 = arr.filter((array) => array >= 6789)
console.log('task325')
console.log(task325)

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let task326 = arr.filter((array) => array < 50)
console.log('task326')
console.log(task326)

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let task327 = arr.filter((array) => array < 100)
console.log('task327')
console.log(task327)

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let task328 = arr.filter((array) => array <= -1)
console.log('task328')
console.log(task328)

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let task329 = arr.filter((array) => array <= -5564)
console.log('task329')
console.log(task329)

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let task330 = arr.filter((array) => array < 1000 && array > 500)
console.log('task330')
console.log(task330)

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let task331 = arr.filter((array) => array < 100 && array > 0)
console.log('task331')
console.log(task331)

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let task332 = arr.filter((array) => array < 0 && array > -50)
console.log('task332')
console.log(task332)

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let task333 = arr.filter((array) => array <= 0 && array > -100)
console.log('task333')
console.log(task333)

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let task334 = arr.filter((array) => array >= 0 && array < 55)
console.log('task334')
console.log(task334)

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let task335 = arr.filter((array) => array >= 444 && array < 654)
console.log('task335')
console.log(task335)

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let task336 = arr.filter((array) => array >= 0 &&  array % 2 === 0)
console.log('task336')
console.log(task336)

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let task337 = arr.filter((array) => array >= 0 &&  array % 3 === 0)
console.log('task337')
console.log(task337)

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let task338 = arr.filter((array) => array < 0 &&  array % 4 === 0)
console.log('task338')
console.log(task338)

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let task339 = arr.filter((array) => array < 0 &&  array % 111 === 0)
console.log('task339')
console.log(task339)

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let task340 = arr.filter((array) => array > 500 &&  array % 2 === 0)
console.log('task340')
console.log(task340)

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let task341 = arr.filter((array) => array > 1000 &&  array % 3 === 0)
console.log('task341')
console.log(task341)

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let task342 = arr.filter((array) => array < 1000 &&  array % 9 === 0)
console.log('task342')
console.log(task342)

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let task343 = arr.filter((array) => array < 500 &&  array % 2 === 0)
console.log('task343')
console.log(task343)

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let task344 = arr.filter((array) => array >= 33 &&  array % 3 === 0)
console.log('task344')
console.log(task344)

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let task345 = arr.filter((array) => array >= 444 &&  array % 12 === 0)
console.log('task345')
console.log(task345)

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let task346 = arr.filter((array) => array <= 155 &&  array % 5 === 0)
console.log('task346')
console.log(task346)

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let task347 = arr.filter((array) => array <= -333 &&  array % 9 === 0)
console.log('task347')
console.log(task347)

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let task348 = arr.filter((array) => array > 100 && array < 500 &&  array % 5 === 0)
console.log('task348')
console.log(task348)

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let task349 = arr.filter((array) => array >= 888 && array < 1000 &&  array % 2 === 0)
console.log('task349')
console.log(task349)

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let task350 = arr.filter((array) => array <= 888 && array >= -333 &&  array % 3 === 0 && array !== 0)
console.log('task350')
console.log(task350)

// 3.51. Gauti tik skaičius.
let task351 = arr.filter((array) => typeof array === 'number')
console.log('task351')
console.log(task351)

// 3.52. Gauti tik tekstus (string).
let task352 = arr.filter((array) => typeof array !== 'number')
console.log('task352')
console.log(task352)

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let task353 = arr.filter((array) => array.length > 5)
console.log('task353')
console.log(task353)

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let task354 = arr.filter((array) => array.length > 5)
console.log('task354')
console.log(task354)

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
let task355 = arr.filter((array) => array.length < 7)
console.log('task355')
console.log(task355)

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let task356 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findT = array.includes('t')
        return findT
    }
    return false
} )
console.log('task356')
console.log(task356)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let task357 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findY = array.includes('y')
        return findY
    }
    return false
} )
console.log('task357')
console.log(task357)

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let task358 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findEa = array.includes('e') || array.includes('a')
        return findEa
    }
    return false
} )
console.log('task358')
console.log(task358)

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let task359 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findEa = array.includes('t') || array.includes('i')
        return findEa
    }
    return false
} )
console.log('task359')
console.log(task359)

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let task360 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findEa = array.includes('t') && !array.includes('k')
        return findEa
    }
    return false
} )
console.log('task360')
console.log(task360)

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let task361 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findEa = array.includes('a') && !array.includes('s')
        return findEa
    }
    return false
} )
console.log('task361')
console.log(task361)

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let task362 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findEa = array.includes('t') > 1
        return findEa
    }
    return false
} )
console.log('task362')
console.log(task362)

// Destitojo varijantas:
let task3622 = arr.filter(item => {
    if (isNaN(item)) {
    let letterCount = 0

        for (let i = 0; i < item.length; i++) {
        let letter = item[i]

        if (letter === 't') {
            letterCount++
        }

        if (letterCount > 1) {
        }
        }

        return letterCount > 1
    }
})
console.log('task3622')
console.log(task3622)

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let task363 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findEa = array.includes('st')
        return findEa
    }
    return false
} )
console.log('task363')
console.log(task363)

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let task364 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findEa = array.includes('nd')
        return findEa
    }
    return false
} )
console.log('task364')
console.log(task364)


// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let task365 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findEa = !array.includes('s')
        return findEa
    }
    return false
} )
console.log('task365')
console.log(task365)


// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let task366 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findEa = !array.includes('t')
        return findEa
    }
    return false
} )
console.log('task366')
console.log(task366)

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let task367 = arr.filter((array) =>{
    if (typeof array === 'string'){
        let findEa = !array.includes('r') && !array.includes('l')
        return findEa
    }
    return false
} )
console.log('task367')
console.log(task367)

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let task368 = arr.filter((array) => isNaN(array) && !isNaN(array[0]))
console.log('task368')
console.log(task368)

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let task369 = arr.filter((array) => isNaN(array) && array.startsWith('s'))
console.log('task369')
console.log(task369)

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let task370 = arr.filter((array) => isNaN(array) && array.startsWith('o'))
console.log('task370')
console.log(task370)

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide d.
let task371 = arr.filter((array) => isNaN(array) && array.endsWith('d'))
console.log('task371')
console.log(task371)

// 3.72. Gauti tik tekstus (string), kurie baigiasi raide s.
let task372 = arr.filter((array) => isNaN(array) && array.endsWith('s'))
console.log('task372')
console.log(task372)

// 3.73. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let task373 = arr.filter((array) => isNaN(array) && array.includes('o') && array.length > 4)
console.log('task373')
console.log(task373)

// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let task374 = arr.filter((array) => isNaN(array) && array.includes('a') && array.length >= 5)
console.log('task374')
console.log(task374)

// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let task375 = arr.filter((array) => isNaN(array) && array.length % 2 === 0)
console.log('task375')
console.log(task375)

// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let task376 = arr.filter((array) => isNaN(array) && array.length % 2 !== 0 && array.includes('s'))
console.log('task376')
console.log(task376)

// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let task377 = arr.filter((array) => isNaN(array) && array[2] === 'a')
console.log('task377')
console.log(task377)

// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let task378 = arr.filter((array) => isNaN(array) && array[3] === 'l')
console.log('task378')
console.log(task378)

// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let task379 = arr.filter((array) => isNaN(array) && array[4] !== 't' && array.length > 4)
console.log('task379')
console.log(task379)

// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
let task380 = arr.filter((array) => isNaN(array) && array[0] !== 'e' && array.length < 6 && isNaN(array[0]))
console.log('task380')
console.log(task380)