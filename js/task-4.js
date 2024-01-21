'use strict'
// const myArray = [1, 2, 3];
// // for (let i = 0; i < myArray.length; i++) {
// //     console.log(myArray[i])
// // }
// myArray.forEach((element, index) => {
//     console.log(element, index);
// })

// const userProfile = {
//     name: 'Bogdan',
//     commentsQty: 23,
//     hasSignedAgreement: false
// }
// const userInfo = ({ name, commentsQty }) => {
//     if (!commentsQty) {
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentsQty} comments`
// }
// userInfo(userProfile)

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// // function registerGuest(name, callback) {
// //   console.log(`Registering ${name}!`);
// //   callback(name);
// // }

// // registerGuest("Mango", greet); // "Registering Mango!"
// // // "Welcome Mango!"
// // registerGuest("Mango", notify); // "Registering Mango!"
// // // "Dear Mango, your room will be ready in 30 minutes"

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });
// registerGuest("Mango", greet); // "Registering Mango!"
// // "Welcome Mango!"
// registerGuest("Mango", notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"



// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));   // Повертає 138
// console.log(calculateTotalPrice([164, 48, 291]));      // Повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));   // Повертає 1116


const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
