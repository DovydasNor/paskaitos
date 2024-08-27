const form = document.getElementById('form')
console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault()

    document.querySelectorAll('.error-message').forEach(error => error.remove());

    if(!validateForm()){
        return
    } 

    const form = e.target
    console.dir(form.elements)

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

    const studentCreated = studentCreatedPopUp(`Sukurtas studentas (${name} ${surname}) `)

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

        const studentDeleted = studentDeletedPopUp(`Studentas (${name} ${surname}) sėkmingai ištrintas. `)
        studentsList.prepend(studentDeleted)
    })
    
    studentsList.prepend(studentCreated)
    studentItem.append(studentNameSurnameAge, studentPhone, studentEmail, studentITknowledge, studentGroup, languages, showHideButton, delStudent)

    form.reset()
})


const slider = document.getElementById('it')
sliderOutput = document.createElement('span')
sliderOutput.textContent = slider.value
slider.after(sliderOutput)

slider.addEventListener('input', () => {
    sliderOutput.textContent = slider.value
})

function studentInfo(text) {

    const par = document.createElement('p')
    par.classList.add('student-info')
    par.textContent = text

    return par
}

function studentCreatedPopUp(text){

    const span = document.createElement('span')
    span.textContent = text
    span.style.color = 'green'

    setTimeout(() => {
        span.remove()
    }, 5000)

    return span

}

function studentDeletedPopUp(text){

    const span = document.createElement('span')
    span.textContent = text
    span.style.color = 'red'

    setTimeout(() => {
        span.remove()
    }, 5000)

    return span

}

function validateForm() {

    let isValid = true

    document.querySelectorAll('input:required').forEach(input => {
        
        if (!input.value) {
            const errorMessage = document.createElement('span')
            errorMessage.textContent = 'Šis laukelis yra privalomas'
            errorMessage.style.color = 'red'
            errorMessage.classList.add('error-message')
            input.after(errorMessage)

            isValid = false;
        }
        
    })

    if(!isValid){
        const studentsList = document.getElementById('students-list')
    studentsList.append(studentDeletedPopUp('Užpildykite visus privalomus laukelius'))
    }
    
    return isValid

}