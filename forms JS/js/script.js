import { INITIAL_DATA } from './INITIAL_DATA.js'
import { renderInitialData, renderStudent } from './render.js'
import popUpMessage from './popUpMessage.js'
import { storeDataToLocalStorage, getDataFromLocalStorage } from './localStorage.js'

const form = document.getElementById('form')
const studentsList = document.getElementById('students-list')

renderInitialData(INITIAL_DATA)
getDataFromLocalStorage(form)
storeDataToLocalStorage(form)


form.addEventListener('submit', e => {
    e.preventDefault()

    const form = e.target

    let isValid = true

    document.querySelectorAll('input:required').forEach(input => {
        const errorMessage = document.createElement('span')
        errorMessage.remove()
        input.classList.remove('invalid-input')
        

        if (!input.value) {
            errorMessage.textContent = 'Šis laukelis yra privalomas'
            // errorMessage.style.color = 'red'
            errorMessage.classList.add('color-danger')
            input.after(errorMessage)
            input.classList.add('invalid-input')

            isValid = false
        }

    })

    if(!isValid){
        
        studentsList.append(popUpMessage('Užpildykite visus privalomus laukelius', 'color-danger'))

        return
    }

    const nameInput = form.name
    const surnameInput = form.surname
    const ageInput = form.age
    const phoneInput = form.phone
    const emailInput = form.email
    const itInput = form['it']
    const groupInput = form.group
    const langInput = form.querySelectorAll('[name="language"]:checked')

    const name = nameInput.value
    const surname = surnameInput.value
    const age = ageInput.value
    const phone = phoneInput.value
    const email = emailInput.value
    const it = itInput.value
    const group = groupInput.value

    const interests = [...langInput].map(input => input.value)

    const newStudentData = {
        name,
        surname,
        age,
        phone,
        email,
        it,
        group,
        interests,
        id: Math.random()
    }

    renderStudent(newStudentData)
    
    form.reset()

    localStorage.removeItem('name')
    localStorage.removeItem('surname')
    localStorage.removeItem('age')
    localStorage.removeItem('it')
    localStorage.removeItem('phone')
    localStorage.removeItem('email')
    localStorage.removeItem('group')
    localStorage.removeItem('language')

    const studentCreated = popUpMessage(`Sukurtas studentas (${name} ${surname}) `, 'color-success')
    studentsList.prepend(studentCreated)
})

const slider = document.getElementById('it')
const sliderOutput = document.createElement('span')
sliderOutput.textContent = slider.value
slider.after(sliderOutput)

slider.addEventListener('input', () => {
    sliderOutput.textContent = slider.value
})