/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах):
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом.

    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом
      "Ошибка ввода" и больше ничего не делает.
    - В случае верного ввода, последовательно проверить кол-во мест в группах,
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому,
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'

  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/
"use strict";

const sharm = 15;
const hurgada = 25;
const taba = 6;
let group;
let answer;
let quantityPlaces = Number(prompt("Сколько мест вам нужно?"));
let isNanUserResponse = isNaN(quantityPlaces);

console.log(isNanUserResponse);

switch (isNanUserResponse) {
  case true:
    alert("Ошибка ввода");
    break;
  case false:
    if (quantityPlaces > taba && quantityPlaces <= sharm) {
      group = "Sharm";
    } else if (quantityPlaces <= taba) {
      group = "Taba";
    }

    if (quantityPlaces > sharm && quantityPlaces <= hurgada) {
      group = "Hurgada";
    }

    if (quantityPlaces <= hurgada) {
      answer = confirm(`"Eсть место в группе " ${group}". Вы согласни?"`);
    }

    if (quantityPlaces > hurgada) {
      alert("Извините, столько мест нет.");
    } else if (answer) {
      alert(`'Приятного путешествия в группе' ${group}!`);
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
}
