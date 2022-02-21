// simple array decliar
const numbers = [12, 15, 8, 98, 56, 23];
// console.log(numbers);
// console.log(...numbers);

// Math.max fiends the maximum numbers from an array
const maxNumber = Math.max(23, 65, 99);
const maxInArray = Math.max(...numbers);
// console.log(maxNumber, maxInArray);

// numbers.push(55);
// console.log(numbers);

const numbers2 = [22, ...numbers, 88];
numbers.push(55);
console.log(numbers2, numbers);
