"use strict";

// const userAge = prompt("Ведите свой возраст! ");

// const asNumber = Number(userAge);
// const isNaN = Number.isNaN(asNumber);

// console.log("isNaN: ", isNaN);

// console.log(asNumber);
// console.log(typeof asNumber);

// let balance = 124.07;

// balance = (balance * 100 + 3.02 * 100) / 100;

// console.log(balance);

//

// const name = "Mango";
// const age = 2;
// const mood = "happy";

// const tplMessage = `My name is ${name}, I'm ${age} years old and ${mood}!`;

// console.log(tplMessage);

// let input = Number(prompt("Введите число"));
// let answer;
// if (!isNaN(input)) {
//   alert((answer = input * input));
// } else {
//   alert((answer = "Введите другое число!"));
// }

// const number = [12, 33, 2, 45, 10, 99];
// const number = ["qwerty", "aaaa", "1111"];

// const userInput = prompt("Давай число!");
// let hasNumber;

// for (let i = 0, max = number.length; i < max; i += 1) {
//   if (number[i] === userInput) {
//     hasNumber = true;
//     break;
//   }

//   hasNumber = false;
// }

// console.log(hasNumber);
// function leadToTheDegree(x, y) {
//   let res = 1;
//   for (let i = 0; i < y; i += 1) {
//     res = res * x;
//   }
//   console.log(res);
// }

// let number = prompt("давай число");
// let degree = prompt("давай степінь");

// leadToTheDegree(number, degree);

// const arr1 = [1, 2, 3, [4, 5, [6, 7]], 8];
// const arr2 = [9, 10];

// const flatten = function self(arr1) {
//   let newArr = [];

//   for (let elem of arr1) {
//     const isArray = Array.isArray(elem);

//     if (isArray) {
//       newArr = newArr.concat(self(elem));
//     } else {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// };

// let newArr = flatten(arr1).concat(arr2);
// console.log(newArr);

// const logins = {
//   andy: "aaaa",
//   vasyl: "qwerty",
// };

// const inputLogin = prompt();
// const inputPass = prompt();

// logins[inputLogin] = inputPass;

// console.log(logins);

function User(name, age, isActive) {
  this.name = name;
  this.age = age;
  this.isActive = isActive;
}

const mango = new User("Mango", 2, true);
const poly = new User("Poly", 3, false);
