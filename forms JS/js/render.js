import studentInfo from './studentInfo.js'
import popUpMessage from './popUpMessage.js'

studentInfo()

export function renderInitialData(data) {
    data.forEach(item => {
        renderStudent(item)
    })
}

export function renderStudent(data) {

    const { name, age, surname, phone, email, it, group, interests, id } = data

    const studentItem = document.createElement('div')

    const studentsList = document.getElementById('students-list')

    const studentNameSurnameAge = document.createElement('h2')
    studentNameSurnameAge.classList.add('name-surname-age')
    studentNameSurnameAge.textContent = `${name} ${surname} Amžius: ${age}`

    const studentPhone = studentInfo('Tel. nr: ****')
    const studentEmail = studentInfo('El. paštas: ****')

    const studentITknowledge = studentInfo(`IT žinios: ${it}`)

    const studentGroup = studentInfo(`Grupė: ${group}`)

    const language = studentInfo(`Dominančios programavimo kalbos: ${interests.join(', ')}`)

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

    studentItem.append(studentNameSurnameAge, studentPhone, studentEmail, studentITknowledge, studentGroup, language, showHideButton, delStudent)
    studentsList.prepend(studentItem)
}