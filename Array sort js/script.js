// SORT

// Friends list A-Z:
let friendsList = ['Mykolas', 'Juozas', 'Povilas', 'Tomas']
friendsList.sort()
console.log(friendsList)

// Friends list Z-A:
let friendsListRev = ['Mykolas', 'Juozas', 'Povilas', 'Tomas']
friendsListRev.sort((a ,b) => {
    if (a > b){
        return -1
    }
})
console.log(friendsListRev)

// Descending:
let numbs = [5, 10, 20, 11, 12, 1, 0, 14, 25]
numbs.sort((a, b) => {
    if (a < b){
        return 1
    }
    if (a > b){
        return -1
    }
    return 0
})
console.log(numbs)

// Find biggest number:
let = numbs2 = [10, 5, 20, 4]
console.log(Math.max(...numbs2))

// REDUCE
const people = [
    {
      name: "Petras",
      age: "18"
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];
  console.log(people)

  console.log(people.filter( x => x.age >= 18).map(person => person.name).sort())


let grocery = [{name: 'lemonade', price: 10}, {name: 'Lime', price: 50}]
function minMax (items) {
    items.sort((a, b) => a.price - b.price)
    return {pigiausias: items[0].name, brangiausias: items[items.length - 1].name}
}
console.log(minMax(grocery))