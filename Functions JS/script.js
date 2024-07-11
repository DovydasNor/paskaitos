// function myName(name){
//     alert(name)
// }

// myName('Dovydas')

function randomNumber(){
    return Math.floor(Math.random() * 6)
}

console.log(randomNumber())

function stringLength(name, surname){
    return name.length + surname.length
}

console.log(stringLength('Dovydas', 'Norvydas'))

function numbAbc(index){
    let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    if(index >= 0 && index <= 25){
        return abc[index]
    }
    else{
        return console.error('Ivestas skaicius negali buti mazesnis nei 0 ar didesnis nei 26')
    }
    
    
}
console.log(numbAbc(16))

function math(n1, n2, operator){
    let sum = operator === '+' || operator === 'sum'
    let sub = operator === '-' || operator === 'sub'
    let multi = operator === '*' || operator === 'multi'
    let div = operator === '/' || operator === 'div'
    if(sum){
        return n1 + n2
    }

    if(sub){
        return n1 - n2
    }

    if(multi){
        return n1 * n2
    }

    if(div){
        return n1 / n2
    }

    else{
        return console.error( '...')
    }
}

console.log(math(2, 2, '+'))
