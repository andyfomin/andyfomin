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

let login = prompt("Введите логин");
let adminLogin = ["admin", "login"];
let adminPassword = ["qwerty", "aaaa"];
if (!login) {
  alert("Отменено пользователем!");
} else if (login === adminLogin[0]) {
  let password = prompt("Введите пароль");

  if (!password) {
    alert("Отменено пользователем!");
  } else if (password === adminPassword[0]) {
    alert("Добро пожаловать!");
  } else {
    alert("Доступ запрещен!");
  }
} else if (login === adminLogin[1]) {
  let password = prompt("Введите пароль");

  if (!password) {
    alert("Отменено пользователем!");
  } else if (password === adminPassword[1]) {
    alert("Добро пожаловать!");
  } else {
    alert("Доступ запрещен!");
  }
} else {
  alert("Доступ запрещен!");
}

// let login = prompt("Введите логин");
// let adminLogin = ["admin", "login"];
// let adminPassword = ["qwerty", "aaaa"];
// let password = prompt("Введите пароль");

// switch (login) {
//   case null:
//     alert("Отменено пользователем!");
//     break;
//   case adminLogin[0]:
//     password;
//     break;
//   default:
//     alert("Доступ запрещен!");
// }

// switch (password) {
//   case null:
//     alert("Отменено пользователем!");
//     break;
//   case adminPassword[0]:
//     alert("Добро пожаловать!");
//     break;
//   default:
//     alert("Доступ запрещен!");
// }
