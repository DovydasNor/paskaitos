import validate from './validation.js'
import getNewStudentData from './newStudentData.js'
import popUpMessage from './popUpMessage.js'
import { renderStudent } from './render.js'
import { exportDataToLocal, removeInputData } from './localStorage.js'

export default function submit(){

    const studentsList = document.getElementById('students-list')

    form.addEventListener('submit', e => {
        e.preventDefault()
    
        const form = e.target
    
        const isValid = validate(form)
    
        if(!isValid) {
            studentsList.prepend(popUpMessage('Užpildykite visus privalomus laukelius', 'color-danger'))
            return
        }
    
        const newStudentData = getNewStudentData(form)
        
        exportDataToLocal(newStudentData)
    
        renderStudent(newStudentData)
        
        form.reset()
    
        removeInputData()
    
        const studentCreated = popUpMessage(`Sukurtas studentas (${newStudentData.name} ${newStudentData.surname}) `, 'color-success')
        studentsList.prepend(studentCreated)
    })

}