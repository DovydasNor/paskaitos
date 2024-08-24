export default function createForm() {
    const formElement = document.createElement('form')
    formElement.id = 'form-element'

    const selectElement = document.createElement('select')
    selectElement.id = 'select'
    selectElement.name = 'select'

    const selectElementOption = document.createElement('option')
    selectElementOption.value = ''
    selectElementOption.textContent = 'Select search category'

    const selectElementOption1 = document.createElement('option')
    selectElementOption1.value = 'posts'
    selectElementOption1.textContent = 'posts'

    const selectElementOption2 = document.createElement('option')
    selectElementOption2.value = 'users'
    selectElementOption2.textContent = 'users'

    selectElement.append(selectElementOption, selectElementOption1, selectElementOption2)

    const inputElement = document.createElement('input')
    inputElement.type = 'text'
    inputElement.id = 'search-phrase'
    inputElement.name = 'search-phrase'

    const buttonElement = document.createElement('button')
    buttonElement.type = 'submit'
    buttonElement.textContent = 'Search' 

    formElement.append(selectElement, inputElement, buttonElement)

    return formElement
}