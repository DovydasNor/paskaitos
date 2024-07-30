class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }
    getSummary(){
            return `${this.title} by ${this.author} published in ${this.year}`
    }
}
 let book = new Book('\'Metro 2033\'', 'Dmitry Glukhovsky', '2010')
 console.log(book.getSummary())


class MusicStudent{
    constructor(name, instrument, level){
        this.name = name
        this.instrument = instrument
        this.level = level
    }

    practice(level){
        if(level === 'advanced'){
            return  this.level = 'Advanced'
        }else if(level === 'intermediate'){
            return this.level = 'Intermediate'
        }else{
            return this.level = 'Beginner'
        }
    }
}

let student = new MusicStudent('Dovydas', 'Electric Guitar')
student.practice()
console.log(`${student.name}, ${student.instrument}, ${student.level}`)

class ShoppingCart{
    constructor(){
        this.items = []
    }

    addItem(item){
        this.items.push(item)
    }

    removeItem(itemName){
        this.items = this.items.filter(item => item.name !== itemName)
    }

    calculateTotal(){
        return this.items.reduce((total, item) => total + item.price, 0)
    }
}

let cart = new ShoppingCart()
cart.addItem({name: 'apple', price: 0.99})
cart.addItem({name: 'bread', price: 2.00})
console.log(cart.calculateTotal())
cart.removeItem('apple')
console.log(cart.calculateTotal())