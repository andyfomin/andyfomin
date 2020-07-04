"use strict";

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
const numbers = [];
let userInput;
let sum = 0;
let userNumbers;
let massege;

do {
  userInput = prompt(
    "Введите число для масива чисел! Что бы завершить ввод нажмите ОТМЕНА"
  );
  userNumbers = Number.parseInt(userInput);
  console.log(userNumbers);

  if (!isNaN(userNumbers)) {
    numbers.push(userNumbers);
  } else if (userInput === null) {
    massege = numbers.join("+");
    alert(`Считаем сумму: ${massege}`);
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
} while (userInput !== null);

for (const addition of numbers) {
  sum += addition;
}
if (sum > 0) {
  alert(`Сумма ровна: ${sum}`);
}