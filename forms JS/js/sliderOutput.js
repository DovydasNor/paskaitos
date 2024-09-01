export function sliderOutput() {
    
    const slider = document.getElementById('it')
    const sliderOutput = document.createElement('span')
    sliderOutput.textContent = slider.value
    slider.after(sliderOutput)
    
    slider.addEventListener('input', () => {
        sliderOutput.textContent = slider.value
    })

}