"use strict";

/*Напишите скрипт авторизации пользователя.

  Есть массив паролей зарегистрированных пользователей passwords.

  При посещении страницы, необходимо попросить пользователя ввести свой пароль,
  после чего проверить содержит ли массив passwords пароль введенный пользователем.

  Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
  Подсказка: используйте цикл do...while.
  Если был введен пароль который есть в массиве passwords, вывести alert
  с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
  Если был введен не существующий пароль, отнять от лимита попыток единицу,
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток",
  где n это оставшийся лимит.

  После того как пользователь закрыл alert, запросить пароль снова.
  Продолжать запрашивать пароль до тех пор, пока пользователь не введет
  существующий пароль, не кончатся попытки или пока пользователь
  не нажмет Cancel в prompt.
  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"

  Если пользователь нажмет Cancel, прекратить выполнение цикла.
*/

const passwords = ["aaaa", "qwerty", "asdf", "qqqq"];
let attempts = 3;
let userPassword;

do {
  attempts -= 1;
  userPassword = prompt("Введите пароль!");
  if (userPassword) {
    if (passwords.includes(userPassword)) {
      alert("Добро пожаловать");
      arr();
      break;
    } else if (!attempts) {
      alert("У вас закончились попытки, аккаунт заблокирован!");
    } else {
      alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
    }
  } else {
    alert("Отменено пользователем");
    break;
  }
} while (attempts);

/*
  Написать следующий скрипт:

    - При загрузке страницы пользователю предлагается ввести через prompt число.
      Число введенное пользователем записывается в массив чисел.

    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.

    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять
      массив введенных чисел, сложить общую сумму всех элементов массива и
      записать ее в переменную. Используйте цикл for...of.

    - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`

  🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор
      символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом
      'Было введено не число, попробуйте еще раз', при этом результат prompt записывать
      в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

function arr() {
  const numbers = [];
  let userInput;
  let sum = 0;
  let userNumber;

  do {
    userInput = prompt(
      "Введите число для масива чисел! Что бы завершить ввод нажмите ОТМЕНА"
    );
    userNumber = Number.parseInt(userInput);
    console.log(userNumber);

    if (!isNaN(userNumber)) {
      numbers.push(userNumber);
    } else if (!userInput) {
      alert(`Считаем сумму: ${numbers.join("+")}`);
    } else {
      alert("Было введено не число, попробуйте еще раз");
    }
  } while (userInput);

  for (const addition of numbers) {
    sum += addition;
  }
  if (sum) {
    alert(`Сумма ровна: ${sum}`);
  }
}
