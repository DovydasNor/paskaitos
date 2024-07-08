for (let i = 1; i <= 10; i++){
    console.log(`${i}: Dovydas`)
}

let i = 1
while(i <= 3){
    console.log(`${i}: Dovydas`)
    i++
}

let combo = '';
const name = 'Dovydas ';
let times = 3;
do {
  combo += name;
  times--;
} while (times > 0);
console.log(combo); 