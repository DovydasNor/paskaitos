export default function popUpMessage(text, className){

    const popUpMessage = document.createElement('span')
    popUpMessage.textContent = text
    popUpMessage.className = ''
    popUpMessage.classList.add(className)

    setTimeout(() => {
        popUpMessage.remove()
    }, 5000)

    return popUpMessage
}