export default function validate(form) {
    let isValid = true

    form.querySelectorAll('.color-danger').forEach(element => element.remove())

    form.querySelectorAll('input:required').forEach(input => {
        input.classList.remove('invalid-input')
        
        if (!input.value) {
            input.classList.add('invalid-input')
            isValid = false

            const errorMessage = document.createElement('span')
            errorMessage.textContent = 'Šis laukelis yra privalomas'
            errorMessage.classList.add('color-danger')
            
            input.after(errorMessage)
        }
    })
    return isValid
}