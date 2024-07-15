let name = name =>{
    alert(name)
}

name('Dovydas')

let randomNumber = () => Math.floor(Math.random() * 10  + 1)
console.log(randomNumber())

let nameSurnameLength = (name, surname) => name.length + surname.length
console.log(nameSurnameLength('Dovydas', 'Norvydas'))

let abcNumb = index => {
    let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    return abc[index];
}

console.log(abcNumb(2))

let math = (n1, n2, operator) => {
    let nan = isNaN(n1) || isNaN(n2)
    let sum = operator === 'sum' || operator === '+'
    let sub = operator === 'sub' || operator === '-'
    let div = operator === 'div' || operator === '/'
    let multi = operator === 'multi' || operator === '*'

    if(nan){
        console.error('grysk i perma klasi ir susipažynk su skaices')

    }else if (sum){
        return n1 + n2

    }else if (sub){
        return n1 - n2

    }else if (div){
        return n1 / n2

    }else if (multi){
        return n1 * n2

    }else{
        console.error('grysk i perma klasi ir susipažynk su matiekas operatores')
    }

}

console.log(math(1, 1, '+'))

let squareNumb = number => Math.pow(number, 2)
console.log(squareNumb(randomNumber()))