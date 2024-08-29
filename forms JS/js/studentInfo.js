export default function studentInfo(text) {

    const par = document.createElement('p')
    par.classList.add('student-info')
    par.textContent = text

    return par
}