const form = document.getElementById('form')
console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault()
    const form = e.target
    console.dir(form.elements)

    const studentItem = document.createElement('div')

    const studentsList = document.getElementById('students-list')
    studentsList.append(studentItem)

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

    const studentPhone = studentInfo(`Tel. nr: ${phone}`)
    const studentEmail = studentInfo(`El. paštas: ${email}`)
    const studentITknowledge = studentInfo(`IT žinios: ${it}`)
    const studentGroup = studentInfo(`Grupė: ${group}`)

    const checkLanguages = Array.from(form.querySelectorAll('[name="language"]:checked')).map(language => language.value)
    const languages = studentInfo(`Dominančios kalbos: ${checkLanguages.join(', ')}`)

    const studentCreated = studentCreatedPopUp(`Sukurtas studentas (${name} ${surname})`)

    studentItem.append(studentCreated, studentNameSurnameAge, studentPhone, studentEmail, studentITknowledge, studentGroup, languages)
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