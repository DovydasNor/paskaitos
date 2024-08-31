import { INITIAL_DATA } from "./INITIAL_DATA.js"

const dataJson = JSON.stringify(INITIAL_DATA)

localStorage.setItem('usersData', dataJson)

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

function getInputDataFromLocalStorage(key, form){

    const localValue = localStorage.getItem(key)

    if (!localValue) {
        return
    }

    form[key].value = localValue
}


function getArraysFromLocalStorage(name, form) {
    const valueFromLocal = JSON.parse(localStorage.getItem(name));

    if (!valueFromLocal) {
        return;
    }

    valueFromLocal.forEach(val => {
        // Patikriname, ar 'name' ir 'val' turi reikšmes, kad išvengtume klaidų
        if (name && val) {
            const input = form.querySelector(`[name='${name}'][value='${val}']`);
            if (input) {
                input.checked = true;
            } else {
                console.warn(`Checkbox with name ${name} and value ${val} not found.`);
            }
        } else {
            console.warn(`Invalid selector with name ${name} and value ${val}.`);
        }
    });
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
