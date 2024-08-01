let contentElement = document.querySelector('#content-id')

let containerElement = document.createElement('div')
containerElement.classList.add('container')
contentElement.append(containerElement)

let mainElement = document.createElement('section')
mainElement.classList.add('main')
containerElement.append(mainElement)

let h1Element = document.createElement('h1')
h1Element.textContent = 'Naujienos'
mainElement.append(h1Element)
console.dir(h1Element)

let bigWrapperElement = document.createElement('div')
bigWrapperElement.classList.add('big-wrapper')
mainElement.append(bigWrapperElement)

let bigLinkElement = document.createElement('a')
bigLinkElement.classList.add('big-link')
bigLinkElement.setAttribute('href', '#')
bigWrapperElement.append(bigLinkElement)

let big2BoxElement = document.createElement('div')
big2BoxElement.classList.add('big2-box')
bigLinkElement.append(big2BoxElement)

let big2Element = document.createElement('div')
big2Element.classList.add('big2')
big2BoxElement.append(big2Element)

let imgElement = document.createElement('img')
imgElement.setAttribute('src', 'images/Serbintaitė-big.jpg')
imgElement.setAttribute('alt', 'Serbintaite foto')
big2Element.append(imgElement)

let bigContentElement = document.createElement('div')
bigContentElement.classList('content')
big2BoxElement.append(bigContentElement)

let spanBlueElement = document.createElement('span')
spanBlueElement.classList.add('blue-text')
spanBlueElement.textContent = 'KARJERA'
bigContentElement.append(spanBlueElement)
