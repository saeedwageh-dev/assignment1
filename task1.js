//Part 1: Coding Questions
// 1----------------------------------
const input = "123";
function convert(input) {
  return Number(input) + 7;
}
console.log(convert(input));

// 2 --------------------------------
function check(val) {
  if (!val) {
    console.log("Invalid");
  } else {
    console.log("Valid");
  }
}
check(0);
check("0");

// 3--------------------------------
for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

//4 --------------------------------
const arr = [1, 2, 3, 4, 5];

var result = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(result);

//5 --------------------------------
const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];

function merge(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(merge(arrOne, arrTwo));

//6 --------------------------------
function getDay(num) {
  switch (num) {
    case 1:
      return "sunday";
    case 2:
      return "monday";
    case 3:
      return "tuesday";
    case 4:
      return "wednesday";
    case 5:
      return "thursday";
    case 6:
      return "friday";
    case 7:
      return "saturday";
  }
}
console.log(getDay(1));

//7--------------------------------
const stringArr = ["a", "ab", "abc"];

var resultArr = stringArr.map((val) => {
  return val.length;
});

console.log(resultArr);

// 8-------------------------------
function isDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both ";
  } else {
    return "Not divisible by both ";
  }
}
console.log(isDivisible(15));

//9--------------------------------
const squareNum = (num) => num * num;

console.log(squareNum(5));

//10-------------------------------
const person = {
  name: "John",
  age: 25,
};

function destructFun({ name, age }) {
  return `${name} is ${age} years old`;
}
console.log(destructFun(person));

//11-------------------------------
function sum(...arr) {
  return arr.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

//12------------------------------
function getPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
getPromise().then((message) => {
  console.log(message);
});

//13 -----------------------------
function largestNum(arr) {
  return Math.max(...arr);
}
console.log(largestNum([1, 3, 7, 2, 4]));

//14 -----------------------------
const person2 = {
  name: "john",
  age: 30,
};

function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys(person2));

//15------------------------------
function splitString(txt) {
  return txt.split(" ");
}
console.log(splitString("the quick brown fox"));





//Part 2: Essay Questions
//1- what is the difference between forEach and for..of?when would you use each one?
/**
 * forEach is a method that is used to iterate over an array and execute a provided function once for each element in the array.
 * It does not return a value and cannot be used with break or continue statements.
 * It is best used when you want to perform an action on each element of an array without needing to break out of the loop.
 * for of loop is a newer syntax that allows you to iterate over iterable objects such as arrays,strings, and maps.
 * It returns the value of each element in the iterable and can be used with break and continue statements.
 * It is best used when you want to iterate over an iterable object and have more control over the loop flow.
 */
//2- whats the hoisting and whats the temporal dead zone?explain with examples.
/**
 * Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase.
 * This means that you can use variables and functions before they are declared in the code.
 * For example:
 * console.log(x); // undefined
 * var x = 5;
 * In this example, the variable x is hoisted to the top of the scope, so it can be accessed before it is declared. However, its value is undefined until it is assigned a value.
 * The temporal dead zone is a period of time during which a variable is declared but not yet initialized.
 * This means that you cannot access the variable before it is initialized.
 * For example:
 * console.log(y); // ReferenceError: Cannot access 'y' before initialization
 * let y = 10;
 * In this example, the variable y is declared using let, which creates a temporal dead zone. If you try to access y before it is initialized, you will get a ReferenceError.
 */
//3- what are the main differences between == and ===?
/**
 * The == operator compares values after performing type coercion, while the === operator compares values without type coercion.
 * This means that == will convert the operands to the same type before making the comparison, while === will not.
 */
//4- Explain how try-catch works and why it is important in async operations?
/**
 * The try-catch statement is used to handle errors that may occur during the execution of code.
 * In async operations, try-catch is particularly important because it allows you to handle errors that might occur when awaiting promises or when executing asynchronous code.
 */
//5- what's the difference between type conversion and type coercion?provide examples for each one.
/**
 * Type conversion is the process of converting a value from one data type to another explicitly, while type coercion is the automatic conversion of values from one data type to another by JavaScript.
 * For example, type conversion can be done using functions like Number(), String(), or Boolean():
 * let num = "5";
 * let convertedNum = Number(num); // convertedNum is now 5
 * Type coercion occurs automatically when comparing values of different types, such as when comparing a number with a string:
  * let num = 5;
  * let str = "5";
  * if (num == str) {
  *   console.log("Equal");
  * } else {
  *   console.log("Not equal");
  * }
 */ 