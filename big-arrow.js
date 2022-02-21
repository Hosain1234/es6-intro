const add = (num1, num2, num3) => num1 + num2 + num3;
const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const sumResult = add(12, 13, 15);
const divideResult = divide(12, 6);
const multiplyResult = multiply(12, 10, 3);
// console.log(sumResult, divideResult, multiplyResult);

const fiveTimes = (num1) => num1*5;
const output = fiveTimes(12);

// if there is only one parameter no bracket is needed
const threeTimes = num1 => num1*3;
const threeTime = threeTimes(15);
console.log(output, threeTime);

// if there is no parameter then this is the process
const getName = () => 'Abdullah al hosain';
const name = getName();
console.log(name);

// if you want to do too many operation in arrow function follow this
const doMath = (x, y) => {
    const sum = x+y;
    const different = x-y;
    const result = sum * different;
    const output = result * 5;
    return output;
}
const multiOperation = doMath(5, 2);
console.log(multiOperation);

