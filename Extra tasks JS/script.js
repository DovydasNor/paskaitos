// SLAPTAŽODIS:
let password = '14524565485245#4'

if(password.includes('#') === false){
    console.log('Slaptažodis privalo turėti grotažymes')
}else if (password.length < 16) {
    console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
}else if (password.length > 15){
    if (password.length > 20){
        console.log('Slaptažodis tinkamas')
    } else if(password.length <= 20){
        console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
    }
}

// AMŽIUS:
let schoolKidAge = prompt('Įveskite mokinio amžių')

if(isNaN(schoolKidAge) === true){
    console.log('Netinkamai nurodytas amžius, amžius privalo būti skaičius.')
}else if(schoolKidAge < 0){
    console.log('Įvestas amžius yra per mažas.')
}
else if(schoolKidAge > 120){
    console.log('Įvestas amžius yra per didelis.')
}
else if(schoolKidAge < 6){
    console.log('Iki 6 metų į mokyklą neina.')
}
else if(schoolKidAge === 6){
    console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
}
else if(schoolKidAge > 6 && schoolKidAge < 10){
    console.log('7-10 metų eina į pradinę klasę.')
}
else if(schoolKidAge === 10){
    console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas')
}
else if(schoolKidAge > 10 && schoolKidAge < 14){
    console.log('11-14 metų eina į pagrindinę.')
}
else if(schoolKidAge === 14){
    console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
}
else if(schoolKidAge > 14 && schoolKidAge < 18){
    console.log('15-18 metų eina į gimnaziją.')
}
else if(schoolKidAge === 18){
    console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
}
else{
    console.log('19+ mokyklą baigė.')
}

// GALVOSŪKIS:

// Pirmas lygis
let correctAnswer11 = 'Kambaryje stovi 4 kėdės ir 3 taburetės'
let correctAnswer12 = 'laivas'

let playerAnswer11 = 'Kambaryje stovi 4 kėdės ir 3 taburetės'
let playerAnswer12 = 'lempa'

if(correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12){
    console.log('Patekai i kita lygi: abu atsakymai teisingi.')
}else if(correctAnswer11 !== playerAnswer11 && correctAnswer11 === playerAnswer12){
    console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
}else if(correctAnswer11 === playerAnswer11 && correctAnswer12 !== playerAnswer12){
    console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
}else{
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}

// Antras lygis
let correctAnswer21 = 'Kambaryje stovi 4 kėdės ir 3 taburetės'
let correctAnswer22 = 'laivas'

let playerAnswer21 = 'Kambaryje stovi 6 kėdės ir 3 taburetės'
let playerAnswer22 = 'laivas'

if(correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22){
    console.log('Patekai i kita lygi: abu atsakymai teisingi.')
}else if(correctAnswer21 !== playerAnswer21 && correctAnswer22 === playerAnswer22){
    console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
}else if(correctAnswer21 === playerAnswer21 && correctAnswer22 !== playerAnswer22){
    console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o antras buvo teisingas.')
}else{
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}

// Trečias Lygis
let correctAnswer31 = 'Kambaryje stovi 4 kėdės ir 3 taburetės'
let correctAnswer32 = 'laivas'
let correctAnswer33 = 'monitorius'

let playerAnswer31 = 'Kambaryje stovi 4 kėdės ir 3 taburetės'
let playerAnswer32 = 'laivas'
let playerAnswer33 = 'monitorius'

if(correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33){
    console.log('Patekai i kita lygi: visi atsakymai teisingi.')
}else if(correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33){
    console.log('Patekai i kita lygi: pirmas ir antras atsakymai teisingi, o trečias neteisingas.')
}else if(correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 !== playerAnswer33){
    console.log('Patekai i kita lygi: pirmas ir trečias  atsakymai teisingi, o antras neteisingas.')
}else if(correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33){
    console.log('Patekai i kita lygi: antras ir trečias  atsakymai teisingi, o pirmas neteisingas.')
}else if(correctAnswer31 === playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 !== playerAnswer33){
    console.log('Nepatekai i kita lygi: pirmas atsakymas teisingas, o antras ir trečias neteisingi.')
}else if(correctAnswer31 !== playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33){
    console.log('Nepatekai i kita lygi: antras atsakymas teisingas, o pirmas ir trečias neteisingi.')
}else if(correctAnswer31 !== playerAnswer31 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33){
    console.log('Nepatekai i kita lygi: trečias atsakymas teisingas, o pirmas ir antras neteisingi.')
}else{
    console.log('Nepatekai i kita lygi: visi atsakymai neteisingi.')
}

// PASISVEIKINIMAS:
let isLoggedIn = true
let userName = 'John'
let time = 14
let isBirthday = true

if(isLoggedIn === true && isBirthday === false){
    if(time === 5 || time < 13){
        console.log(`Good Morning ${userName}`)
    }else if(time === 13 || time < 19){
        console.log(`Good Afternoon ${userName}`)
    }else if(time === 19 || time < 5){
        console.log(`Good Evening ${userName}`)
    }else{
        console.log(`Hello ${userName}`)
    }
    
}else if(isLoggedIn === true && isBirthday === true){
    if(time === 5 || time < 13){
        console.log(`Good Morning, ${userName} and have a great birthday!`)
    }else if(time === 13 || time < 19){
        console.log(`Good Afternoon, ${userName} and have a great birthday!`)
    }else if(time === 19 || time < 5){
        console.log(`Good Evening, ${userName} and have a great birthday!`)
    }else{
        console.log(`Hello ${userName} and have a great birthday!`)
    }
}else if(isLoggedIn === false){
    if(time === 5 || time < 13){
        console.log('Good Morning')
    }else if(time === 13 || time < 19){
        console.log('Good Afternoon')
    }else if(time === 19 || time < 5){
        console.log('Good Evening')
    }else{
        console.log('Hello')
    }
}