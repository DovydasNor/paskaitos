export default function getNewStudentData(form){
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

    return newStudentData
}