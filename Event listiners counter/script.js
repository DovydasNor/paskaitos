// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „5"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra didesnis už 9, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.

// 12. Sukurti du naujus mygtukus, kurie:
// 12.1. Prideda 5 prie esamos h3 elemento reikšmės.
// 12.2. Atima 5 iš esamos h3 elemento reikšmės.



// 13. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.

// 14. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Šio elemento tekstas turėtų būti „Balai:"

// 15. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 15.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 15.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį prepend'inti prie ul elemento.

// 16. Į li elementą įrašytas balas turi būti tos pačios spalvos kaip ir h3 elemente.

// 17.1. Sukurti mygtuką ir jį įdėti į li elementą.
// 17.2. Paspaudus šį mygtuką, li elementas su balu turi būti ištrintas.

// 18. Po h4 elementu pridėti mygtuką, kurio tekstas būtų „Ištrinti visus balus". Paspaudus šį mygtuką, ištrinami visi li elementai.


// 19. Virš ul elemento, sukurti div elementą.
// 19.1. Šio div elemento elemento viduje sukurti p elementą ir jame pridėti tekstą, kuriame nurodomas balų vidurkis: „Vidurkis: 7.5"
// 19.2. Šio div elemento elemento viduje sukurti p elementą ir jame pridėti tekstą, kuriame nurodomas balų mediana: „Mediana: 8"
// 19.3. Šio div elemento elemento viduje sukurti p elementą ir jame pridėti tekstą, kuriame nurodomas didžiausias balas: „Didžiausias balas: 10"
// 19.4. Šio div elemento elemento viduje sukurti p elementą ir jame pridėti tekstą, kuriame nurodomas mažiausias balas: „Mažiausias balas: 10"

// .value

const numbers = document.querySelector('#numbers')

const elementH3 = document.createElement('h3')

const buttonPlus1 = createButton('+')
const buttonPlus2 = createButton('+2')
const buttonReset = createButton('Reset')
const buttonMinus1 = createButton('-')
const buttonMinus2 = createButton('-2')
const buttonPlus5 = createButton('+5')
const buttonMinus5 = createButton('-5')
const saveGrade = createButton('Įrašyti balą')
const delAllGrades = createButton('Ištrinti visus balus')
const delGrade = createButton('x')
const inputElement = createInput()
const elementH4 = document.createElement('h4')
elementH4.textContent = 'Balai:'
const elementUl = document.createElement('ul')


const elementNumber = 5
let elementCounter = elementNumber

inputElement.value = elementCounter

numbers.prepend(inputElement)
numbers.append(elementH3, buttonPlus1, buttonPlus2, buttonPlus5, buttonReset, buttonMinus1, buttonMinus2, buttonMinus5, saveGrade, elementH4, delAllGrades, elementUl)
checkData(0)

buttonPlus1.addEventListener('click', () => checkData(1))
buttonMinus1.addEventListener('click', () => checkData(-1))
buttonPlus2.addEventListener('click', () => checkData(2))
buttonMinus2.addEventListener('click', () => checkData(-2))
buttonPlus5.addEventListener('click', () => checkData(5))
buttonMinus5.addEventListener('click', () => checkData(-5))
buttonReset.addEventListener('click', () => {
    elementCounter = elementNumber
    checkData(0)
})
saveGrade.addEventListener('click', () => {
    let selectUl = document.querySelector('ul')
    let createLi = document.createElement('li')
    selectUl.append(createLi)
    createLi.append(elementCounter, delGrade)

    if(elementCounter < 5){
        createLi.style.color = 'red'
    }else{
        createLi.style.color = 'green'
    }
})


function createButton (text = ''){

    const button = document.createElement('button')

    if(text){
        button.textContent = text
    }

    return button
}

function createInput (){
    const input = document.createElement('input')
    input.setAttribute('type', 'number')
    return input
}

function checkData (num){
    elementCounter = elementCounter + num
    elementH3.textContent = elementCounter
    disableButtons()
    colorChange()
}

function disableButtons (){
    if (elementCounter > 9) {
        buttonPlus1.setAttribute('disabled', true)
    } else {
        buttonPlus1.removeAttribute('disabled')
    }

    if (elementCounter > 8) {
        buttonPlus2.setAttribute('disabled', true)
    } else {
        buttonPlus2.removeAttribute('disabled')
    }

    if (elementCounter > 5) {
        buttonPlus5.setAttribute('disabled', true)
    } else {
        buttonPlus5.removeAttribute('disabled')
    }

    if (elementCounter <= 1) {
        buttonMinus1.setAttribute('disabled', true)
    } else {
        buttonMinus1.removeAttribute('disabled')
    }

    if (elementCounter <= 2) {
        buttonMinus2.setAttribute('disabled', true)
    } else {
        buttonMinus2.removeAttribute('disabled')
    }

    if (elementCounter <= 5) {
        buttonMinus5.setAttribute('disabled', true)
    } else {
        buttonMinus5.removeAttribute('disabled')
    }
}


function colorChange (){
    if (elementCounter < 5) {
        elementH3.style.color = 'red'
    } else {
        elementH3.style.color = 'green'
    }
}