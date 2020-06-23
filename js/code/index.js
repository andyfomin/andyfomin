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

let login = prompt("Введите логин");
const adminLogin = "admin";
const adminPassword = "qwerty";

if (login === null) {
  alert("Отменено пользователем!");
} else if (login === adminLogin) {
  let password = prompt("Введите пароль");

  if (password === null) {
    alert("Доступ запрещен!");
  } else if (password === adminPassword) {
    alert("Добро пожаловать!");
  }
} else {
  alert("Доступ запрещен!");
}
