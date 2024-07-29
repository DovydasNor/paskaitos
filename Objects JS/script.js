// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent dvi veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.
console.log(`Outside object:`)
let company1 = {}
company1[`company name`] = `Rauna Stoga`
company1.opened = 1974
company1.companyCode = 197451978
company1.employees = 1000001
company1.ceo = `Dovydas Norvydas`
company1.nvoActive = true
company1.workingLocations = []
company1.workingLocations.push(`Lithuania`, `Latvia`, `Estonia`)
company1.activityAreas = []
company1.activityAreas.push(`Roof tear up`, `Programing`)
company1.contacts = {
    phone: `+37062223642`,
    email: `RaunaStoga@gmail.com`,
}
company1.contacts.address = {
    country: `Lithuania`,
    city: `Plungė`,
    street: `Stogų st.`,
    apartment: 25,
}
console.log(company1)


company1.contacts.address.addressStr = function(){
    let {street, apartment, city, country} = this
    let output = `${street} ${apartment}, ${city}, ${country}`
    return output
}
console.log(company1.contacts.address.addressStr())

company1.nvoInactive = function(){
    this.nvoActive = true
    return this.nvoActive
}
console.log(company1.nvoInactive())

company1.nvoActive = function(){
    this.nvoInactive = false
    return this.nvoInactive
}
console.log(company1.nvoActive())

company1.swichActivity = function(){
    this.nvoActive = !this.nvoActive
    return this.nvoActive
}
console.log(company1.swichActivity())

company1.workingLocationsStr = function(){
    let output = `Our working Locations: ${this.workingLocations.join(', ')}`
    return output
}
console.log(company1.workingLocationsStr())

company1.activityAreasStr = function(){
    let output = `Our activity areas: ${this.activityAreas.join(', ')}`
    return output
}
console.log(company1.activityAreasStr())

company1.workingLocationsAdd = function(location){
    let workingLocations = this.workingLocations
    workingLocations.push(location)
    return workingLocations
}
console.log(company1.workingLocationsAdd(`Spain`))

company1.activityAreasAdd = function(area){
    let activityAreas = this.activityAreas
    activityAreas.push(area)
    return activityAreas
}
console.log(company1.activityAreasAdd(`Head banging in wall`))

company1.removeWorkingLocation = function(locationName) {
    this.workingLocations = this.workingLocations.filter(location => location !== locationName)
}
company1.removeWorkingLocation('Latvia')
console.log(company1.workingLocations)

company1.removeActivityArea = function(locationName) {
    this.activityAreas = this.activityAreas.filter(location => location !== locationName)
}
company1.removeActivityArea('Roof tear up')
console.log(company1.activityAreas)

console.log(`Inside Object:`)
let company2 = {
    'company name2': `Rauna Stoga2`,
    opened2: 1974,
    companyCode2: 197451978,
    employees2: 1000001,
    ceo2: `Dovydas Norvydas`,
    nvoInactive: function(){
        nvoActive = true
        return nvoActive
    },

    nvoActive: function(){
        nvoInactive = false
        return nvoInactive
    },

    swichActivity: function(){
        nvoActive = !nvoActive
        return nvoActive
    },
    workingLocations2: [`Lithuania`, `Latvia`, `Estonia`],
    workingLocationsStr: function(){
        let output = `Our working Locations: ${this.workingLocations2.join(', ')}`
        return output
    },
    workingLocationsAdd: function(location){
        let workingLocations = this.workingLocations2
        workingLocations.push(location)
        return workingLocations
    },
    removeWorkingLocation: function(locationName) {
        this.workingLocations2 = this.workingLocations2.filter(location => location !== locationName)
    },
    activityAreas2: [`Roof tear up`, `Programing`],
    activityAreasStr: function(){
        let output = `Our activity areas: ${this.activityAreas2.join(', ')}`
        return output
    },
    activityAreasAdd: function(area){
        let activityAreas = this.activityAreas2
        activityAreas.push(area)
        return activityAreas
    },
    removeActivityArea: function(locationName) {
        this.activityAreas2 = this.activityAreas2.filter(location => location !== locationName)
    },
    contacts2: {
        phone: `+37062223642`,
        email: `RaunaStoga@gmail.com`,
        address: {
            country: `Lithuania`,
            city: `Plungė`,
            street: `Stogų st.`,
            apartment: 25,

            addressStr2: function(){
                let {street, apartment, city, country} = this
                let output = `${street} ${apartment}, ${city}, ${country}`
                return output
            }
            
        }
    }
}
console.log(company2)
console.log(company2.contacts2.address.addressStr2())
console.log(company2.nvoInactive())
console.log(company2.nvoActive())
console.log(company2.swichActivity())
console.log(company2.workingLocationsStr())
console.log(company2.activityAreasStr())
console.log(company2.workingLocationsAdd(`Spain`))
console.log(company2.activityAreasAdd(`Head banging in wall`))
company2.removeWorkingLocation('Latvia')
console.log(company2.workingLocations2)
company2.removeActivityArea('Roof tear up')
console.log(company2.activityAreas2)
