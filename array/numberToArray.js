const number = 12354987;

console.log(number.toString().split('').map(Number));

console.log([...number+''].map(Number));

console.log(Array.from(String(number), Number));

