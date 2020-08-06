"use strict";

/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

/*
  Необходимо создать функцию-конструктор Cashier.

  Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе):
    - name - строка, имя кассира, передается при вызове конструктора

    - productsDatabase - объект база данных продуктов, передается при вызове конструктора

    - totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0

    - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0

    - changeAmount - число, сдача, всегда начинается с 0

    - greet() - метод, выводит в консоль строку `Здравствуйте, вас обслуживает ${имя_кассира}`

    - onSuccess() - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${сдача}`
        если сдача больше 0, и строку `Спасибо за покупку` если сдача равна 0.

    - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'

    - countTotalPrice(order) - метод, получает список покупок, считает общую стоимость исходя из
        поля productsDatabase. Записывает результат в поле totalPrice.

    - getCustomerMoney(value) - метод, получает число - деньги покупателя и записывает его в поле customerMoney

    - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя,
        записывает результат в поле changeAmount.
        * Обязательно проверьте что customerMoney не меньше чем значение поля totalPrice
        * Если денег было передано достаточно, возвращает текущее значение changeAmount
        * Если было передано меньше денег чем в поле totalPrice, возвращает null

    - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
*/

function Cashier(name, productsDatabase) {
  this.name = name;
  this.productsDatabase = productsDatabase;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;

  this.greet = function () {
    console.log(`Здравствуйте, вас обслуживает ${this.name}`);
  };

  this.onSuccess = function () {
    if (this.changeAmount !== 0) {
      console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
    } else {
      console.log("Спасибо за покупку");
    }
  };
  this.onError = function () {
    console.log("Очень жаль, вам не хватает денег на покупки");
  };

  this.countTotalPrice = function (order) {
    let productsDatabase = this.productsDatabase;
    let total = this.totalPrice;

    for (const productClient in order) {
      checkInObj(productClient);
    }

    function checkInObj(key) {
      let mult;
      for (const productShop in productsDatabase) {
        if (productShop === key) {
          mult = productsDatabase[productShop] * order[key];
          total += mult;
        }
      }

      return total;
    }
    return (this.totalPrice = total);
  };

  this.getCustomerMoney = function (value) {
    return (this.customerMoney = value);
  };

  this.countChange = function () {
    if (this.customerMoney < this.totalPrice) {
      return (changeAmount = totalPrice - customerMoney);
    }
    return null;
  };

  this.reset = function () {
    this.totalPrice = 0;
    this.customerMoney = 0;
  };
}
