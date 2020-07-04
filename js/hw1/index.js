/*
  Напишите скрипт, для авторизации администратора в панели управления.

  При загрузке страницы у посетителя запрашивается логин через prompt:

    - Если посетитель нажал Cancel — показыать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы ADMIN_LOGIN,
      показывать alert с текстом 'Доступ запрещен!'
    - Если был введен логин совпадающий со значением константы ADMIN_LOGIN, спрашивать пароль через prompt.

  При вводе пароля:

      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы ADMIN_PASSWORD,
        показывать alert с текстом 'Доступ запрещен!'
      - Если введён пароль который совпадает со значением константы ADMIN_PASSWORD,
        показывать alert с текстом 'Добро пожаловать!'

  PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'qwerty';*/
"use strict";

let login = prompt("Введите логин");
let adminLogin = ["admin", "login"];
let adminPassword = ["qwerty", "aaaa"];
let password;

if (login === adminLogin[0]) {
  password = prompt("Введите пароль");

  if (password === adminPassword[0]) {
    alert("Добро пожаловать!");
  } else {
    switch (!password) {
      case true:
        alert("Отменено пользователем!");
        break;
      default:
        alert("Доступ запрещен!");
    }
  }
} else {
  switch (!login) {
    case true:
      alert("Отменено пользователем!");
      break;
    default:
      alert("Доступ запрещен!");
  }
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json.title));
