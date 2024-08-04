function newPar (){
    let createTextElement = document.createElement('p')
    createTextElement.textContent = 'Sveiki!!!'
    let pushToHtml = document.body.append(createTextElement)
    return pushToHtml
}
newPar()

let h1Element = document.getElementById('name')
h1Element.textContent = 'Dovydas'

document.querySelector('.bluetext > span').textContent = 'blue'

let ol = document.getElementsByTagName('ol')[0]
let li1 = ol.children[0]
let li2 = ol.children[1]
ol.insertBefore(li2, li1)


let list = ['Pienas', 'Duona', 'Kiaušiniai']
function createList (array){
    let createUl = document.createElement('ul')
    array.forEach(item => {
        let createLi = document.createElement('li')
        createLi.textContent = item
        createUl.appendChild(createLi)
    })
    return createUl
}
document.body.appendChild(createList(list))

function higlightWinner (){
    
}