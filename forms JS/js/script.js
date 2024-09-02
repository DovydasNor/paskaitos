import { renderInitialData } from './render.js'
import { sliderOutput } from './sliderOutput.js'
import { getDataFromLocalStorage, storeDataToLocalStorage } from './localStorage.js'
import submit from './formSubmit.js'

function init() {
    
    const form = document.getElementById('form')
    
    renderInitialData()
    getDataFromLocalStorage(form)
    storeDataToLocalStorage(form)
    sliderOutput()
    submit()
    
}

init()
