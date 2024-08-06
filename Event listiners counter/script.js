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

const numbers = document.querySelector('#numbers')

const elementH3 = document.createElement('h3')
elementH3.textContent = 5
numbers.append(elementH3)

function createButton (text = ''){
    const button = document.createElement('button')

    if(text){
        button.textContent = text
    }

    return button
}


const buttonPlus1 = createButton('+')
numbers.append(buttonPlus1)

const buttonPlus2 = createButton('+2')
numbers.append(buttonPlus2)

const buttonReset = createButton('Reset')
numbers.append(buttonReset)

const buttonMinus1 = createButton('-')
numbers.append(buttonMinus1)

const buttonMinus2 = createButton('-2')
numbers.append(buttonMinus2)






buttonPlus1.addEventListener('click', () =>{
    let currentValue = parseInt(elementH3.textContent, 10)
    elementH3.textContent = currentValue + 1

    disableButtons()
    colorChange()
})

buttonMinus1.addEventListener('click', () =>{
    let currentValue = parseInt(elementH3.textContent, 10)
    elementH3.textContent = currentValue - 1

    disableButtons()
    colorChange()
})


buttonPlus2.addEventListener('click', () =>{
    let currentValue = parseInt(elementH3.textContent, 10)
    elementH3.textContent = currentValue + 2

    disableButtons()
    colorChange()
})

buttonMinus2.addEventListener('click', () =>{
    let currentValue = parseInt(elementH3.textContent, 10)
    elementH3.textContent = currentValue - 2

    disableButtons()
    colorChange()
})

function disableButtons(){
    if(elementH3.textContent > 9){
        buttonPlus1.setAttribute('disabled', true)
    }

    else if(elementH3.textContent < 2){
        buttonMinus1.setAttribute('disabled', true)
    }

    else if(elementH3.textContent > 8){
        buttonPlus2.setAttribute('disabled', true)
    }

    else if(elementH3.textContent <= 2){
        buttonMinus2.setAttribute('disabled', true)
    }

    else{
        buttonPlus1.removeAttribute('disabled')
        buttonPlus2.removeAttribute('disabled')
        buttonMinus1.removeAttribute('disabled')
        buttonMinus2.removeAttribute('disabled')
    }
}


function colorChange(){
    if(elementH3.textContent >= 5){
       const green = elementH3.style.color = 'green'
       return green
    }

    else if(elementH3.textContent < 5){
        const red = elementH3.style.color = 'red'
        return red
    }

}






buttonReset.addEventListener('click', reset)

function reset (){
    elementH3.textContent = 5
    elementH3.style.color = 'black'
    disableButtons()
}



