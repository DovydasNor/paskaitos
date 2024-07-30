class Car{
    constructor(brand, model, engine, basePrice){
        this.brand = brand
        this.model = model
        this.engine = engine
        this.vroom = function (){
            return 'vrooom !!!'
        }
        this.basePrice = basePrice
        this.getPrice = function(engine){
            if(engine === 'electric'){
                let electricPrice = myCar.basePrice + 10000
                return electricPrice
            }else if(engine === 'diesel'){
                let dieselPrice = myCar.basePrice + 5000
                return dieselPrice
            }
            else{
                return myCar.basePrice
            }
        }
    }
}

let myCar = new Car ('Jaguar', 'XF', 'petrol', 90000)

console.log(myCar.engine)
console.log(myCar.vroom())
console.log(myCar.getPrice('diesel'))

class BankAccount{
    constructor(ownerName, balance){
        this.ownerName = ownerName
        this.balance = balance
        this.deposit = function(amount){
            this.balance = this.balance + amount
        }
        this.withdraw = function(amount){
            this.balance = this.balance - amount
        }
    }
}

let acc = new BankAccount ('Dovydas', 10000)

acc.deposit(20000)
acc.withdraw(16000)
console.log(acc.balance)

class Vehicle{
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }

    information(){
        return `Brand: ${this.brand} Model: ${this.model}`
    }
}

class Car1 extends Vehicle{
    constructor(brand, model, engineType){
        super(brand, model)
        this.engineType = engineType
    }

    information(){
        return `${super.information()}, Engine type: ${this.engineType}`
    }
}

class Bicycle extends Vehicle{
    constructor(brand, model, hasEngine = Boolean){
        super(brand, model)
        this.hasEngine = hasEngine
    }

    information(){
        return `${super.information()}, Has engine: ${this.hasEngine}`
    }
}

let car = new Car1('Toyota,', 'Auris', 'Hybrid')
console.log(car.information())

let bicycle = new Bicycle('BBBB,', 'CCC', false)
console.log(bicycle.information())