import renderStudents from './renderStudents.js'

const form = document.getElementById('form')
console.log(form)



renderStudents()


form.addEventListener('submit', e => {
    e.preventDefault()

    let isValid = true

    document.querySelectorAll('input:required').forEach(input => {
        
        input.classList.remove('invalid-input')

        if (!input.value) {
            const errorMessage = document.createElement('span')
            errorMessage.textContent = 'Šis laukelis yra privalomas'
            errorMessage.style.color = 'red'
            errorMessage.classList.add('invalid-input')
            input.after(errorMessage)

            input.classList.add('invalid-input')

            isValid = false
        }
        
    })

    if(!isValid){
        const studentsList = document.getElementById('students-list')
        studentsList.append(popUpMessage('Užpildykite visus privalomus laukelius', 'color-success'))

        return
    }

    const studentItem = document.createElement('div')

    const studentsList = document.getElementById('students-list')
    studentsList.prepend(studentItem)

    const name = form.name.value
    const surname = form.surname.value
    const age = form.age.value
    const phone = form.phone.value
    const email = form.email.value
    const it = form.it.value
    const group = form.group.value

    const studentNameSurnameAge = document.createElement('h2')
    studentNameSurnameAge.classList.add('name-surname-age')
    studentNameSurnameAge.textContent = `${name} ${surname} Amžius: ${age}`

    const studentPhone = studentInfo('Tel. nr: ****')
    const studentEmail = studentInfo('El. paštas: ****')

    const studentITknowledge = studentInfo(`IT žinios: ${it}`)
    const studentGroup = studentInfo(`Grupė: ${group}`)

    const checkLanguages = Array.from(form.querySelectorAll('[name="language"]:checked')).map(language => language.value)
    const languages = studentInfo(`Dominančios programavimo kalbos: ${checkLanguages.join(', ')}`)

    const studentCreated = popUpMessage(`Sukurtas studentas (${name} ${surname}) `, 'color-success')
    studentsList.prepend(studentCreated)

    const showHideButton = document.createElement('button')
    showHideButton.textContent = 'Rodyti asmens duomenis'

    let isVisible = false

    showHideButton.addEventListener('click', () => {

        if(isVisible) {
            showHideButton.textContent = 'Rodyti asmens duomenis'
            studentPhone.textContent = 'Tel. nr: ****'
            studentEmail.textContent = 'El. paštas: ****'
            isVisible = false

        } else {
            showHideButton.textContent = 'Slėpti asmens duomenis'
            studentPhone.textContent = `Tel. nr: ${phone}`
            studentEmail.textContent = `El. paštas: ${email}`
            isVisible = true
        }
    })

    const delStudent = document.createElement('button')
    delStudent.textContent = 'Ištrinti studentą'

    delStudent.addEventListener('click', () => {
            
        studentItem.remove()

        const studentDeleted = popUpMessage(`Studentas (${name} ${surname}) sėkmingai ištrintas. `, 'color-danger')
        studentsList.prepend(studentDeleted)
    })
    
    
    studentItem.append(studentNameSurnameAge, studentPhone, studentEmail, studentITknowledge, studentGroup, languages, showHideButton, delStudent)

    form.reset()

})


const slider = document.getElementById('it')
const sliderOutput = document.createElement('span')
sliderOutput.textContent = slider.value
slider.after(sliderOutput)

slider.addEventListener('input', () => {
    sliderOutput.textContent = slider.value
})

export function studentInfo(text) {

    const par = document.createElement('p')
    par.classList.add('student-info')
    par.textContent = text

    return par
}

export function popUpMessage(text, className){

    const popUpMessage = document.createElement('span')
    popUpMessage.textContent = text
    popUpMessage.className = ''
    popUpMessage.classList.add(className)

    setTimeout(() => {
        popUpMessage.remove()
    }, 5000)

    return popUpMessage
}