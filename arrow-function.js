// function declairation
function add(num1, num2){
    return num1 + num2;
}

// function expression
const add2 = function add2(num1, num2){
    return num1 + num2;
}

// anonyomous function

const add3 = function(num1, num2){
    return num1+num2;
}
const firstMath = add(12, 17);
const secondMath = add2(12,15);
const thirdMath = add3(34, 13);
// console.log(firstMath, secondMath, thirdMath);

// arrow function
const add4 = (num1, num2) => num1 + num2;
const mathFour = add4(12, 45);
console.log(mathFour);
