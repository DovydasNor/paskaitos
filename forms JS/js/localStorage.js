
export function storeDataToLocalStorage(form) {
    form.addEventListener('input', e => {
        const { name, value, type } = e.target

        if(type === 'checkbox'){
            const checkedBox = document.querySelectorAll(`[name= '${name}']:checked`)
            const checkedBoxData = [...checkedBox].map(input => input.value)
            localStorage.setItem(name, JSON.stringify(checkedBoxData))
        } else {
            localStorage.setItem(name, value)
        }
    })
}

function getInputDataFromLocalStorage(key, form) {

    const localValue = localStorage.getItem(key)

    if (!localValue) {
        return
    }

    form[key].value = localValue
}


function getArraysFromLocalStorage(name, form) {
    const valueFromLocal = JSON.parse(localStorage.getItem(name))

    if (!valueFromLocal) {
        return
    }

    valueFromLocal.forEach(val => {
        if (name && val) {
            const input = form.querySelector(`[name='${name}'][value='${val}']`)
            if (input) {
                input.checked = true;
            }
        }
    })
}

export function getDataFromLocalStorage(form){
    getInputDataFromLocalStorage('name', form)
    getInputDataFromLocalStorage('surname', form)
    getInputDataFromLocalStorage('age', form)
    getInputDataFromLocalStorage('it', form)
    getInputDataFromLocalStorage('phone', form)
    getInputDataFromLocalStorage('email', form)
    getInputDataFromLocalStorage('group', form)
    getArraysFromLocalStorage('language', form)
}

export function removeInputData() {
    localStorage.removeItem('name')
    localStorage.removeItem('surname')
    localStorage.removeItem('age')
    localStorage.removeItem('it')
    localStorage.removeItem('phone')
    localStorage.removeItem('email')
    localStorage.removeItem('group')
    localStorage.removeItem('language')
}

export function exportDataToLocal(obj) {
    let dataParse = localStorage.getItem('students-list') ? JSON.parse(localStorage.getItem('students-list')) : []
    dataParse.push(obj)
    localStorage.setItem('students-list', JSON.stringify(dataParse))
}

export function importDataFromLocal() {
    const initialData = localStorage.getItem('students-list') ? JSON.parse(localStorage.getItem('students-list')) : []

    return initialData
}