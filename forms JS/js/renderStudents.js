import { INITIAL_DATA } from "./INITIAL_DATA.js"
import { studentInfo } from "./script.js"
import { popUpMessage } from "./script.js"

export default function renderStudents() {


    
    const studentsList = document.getElementById('students-list')

    INITIAL_DATA.forEach(person => {
    
        const studentItem = document.createElement('div')

    
        studentsList.prepend(studentItem)

        const name = person.name
        const surname = person.surname
        const age = person.age
        const phone = person.phone
        const email = person.email
        const it = person.it
        const lang = person.interests
        const group = person.group

        const studentNameSurnameAge = document.createElement('h2')
        studentNameSurnameAge.classList.add('name-surname-age')
        studentNameSurnameAge.textContent = `${name} ${surname} Amžius: ${age}`

        const studentPhone = studentInfo('Tel. nr: ****')
        const studentEmail = studentInfo('El. paštas: ****')

        const studentITknowledge = studentInfo(`IT žinios: ${it}`)
        const studentGroup = studentInfo(`Grupė: ${group}`)

        const languages = studentInfo(`Dominančios programavimo kalbos: ${lang.join(', ')}`)

        // const studentCreated = popUpMessage(`Sukurtas studentas (${name} ${surname}) `, 'color-success')
        // studentsList.prepend(studentCreated)

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
    
}