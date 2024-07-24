// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log(`Part 3`)

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:
let arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
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
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
// 3.51. Gauti tik skaičius.
// 3.52. Gauti tik tekstus (string).
// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.74. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// 3.75. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
// 3.76. Gauti tik tekstus (string), kurių trečias simbolis yra a.
// 3.77. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
// 3.78. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
// 3.79. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.