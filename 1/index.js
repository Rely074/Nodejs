const colors = require('colors');

const [firstnumber, secondnumber ] = process.argv.slice(2);

let i = Number(firstnumber);
const p = Number(secondnumber);
let array = [];
let j = 0;

if(isNaN(i) || isNaN(p)){
    console.log(colors.red('В заданном диапозоне нет чисел'));
    return;
}

for (i; i <= p; i++) {
    array.push(i);
}

array = array.filter((number) => {
for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
}
return true;
});

if (array.length == 0){
    console.log(colors.red('Простых чисел в диапазоне нет'));
}

for (let i=0; i < array.length; i++) {
    if (i == j) {
    j = j+3;
console.log(colors.green(array[i]));  
    } else if (i < j-1) {
console.log(colors.yellow(array[i]));
    } else{
console.log(colors.red(array[i]));
    }
}


