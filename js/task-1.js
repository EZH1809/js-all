'use strict';
// //Работа с объектами и массивами

// let company = { companyName: "Healthy Candy",
//                 activity: ["food manufacturing",
//                 "improving kids' health", "manufacturing toys"],
//     addresses: [
//         {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//   },
//   {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
//         }
//     ],
//                 yearOfEstablishment: 2021
// };

// console.log(company);

// const streetName = `${company.addresses[1].street} ${company.addresses[0].street}`; // Получение названия улицы адреса

// console.log(streetName);

//Объекты внутри массивов внутри объектов

// const company = {
//   companyName: "Healthy Candy",
//   activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
//   addresses: [
//     {
//       streetName: "2nd street",
//       number: "123",
//       zipcode: "33116",
//       city: "Miami",
//       state: "Florida"
//     },
//     {
//       streetName: "1st West avenue",
//       number: "5",
//       zipcode: "75001",
//       city: "Addison",
//       state: "Texas"
//     }
//   ],
//   yearOfEstablishment: 2021
// };

// const streetName = company.addresses[0].streetName;
// console.log(streetName);


//задача
/*1.	Создайте	объект	с	именем	people,	содержащий	пустой	массив	под	на-
званием	friends.
2.	Создайте	три	переменные,	каждая	из	которых	содержит	объект,	включа-
ющий	имя,	фамилию	и	значение	ID	вашего	друга.
3.	Добавьте	трех	друзей	в	массив	friend.
4.	Выведите	результат	на	экран.*/

// const people = {
//     friends: []
// };
// const friend1 = {
//     name: 'Alex',
//     surname: 'Vladimirov',
//     id: 25417
// };

// const friend2 = {
//     name: 'Maxim',
//     surname: 'Vlasenco',
//     id: 56879
// };
// const friend3 = {
//     name: 'Fedor',
//     surname: 'Dostoevsky',
//     id: 98574
// };

// people.friends.push(friend1, friend2, friend3);
// console.table(people);


// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
// // console.log(theList);
// // Заменяем первый элемент
// theList.shift();
// // theList.unshift('FIRST');
// theList.splice(0, 1, 'FIRST');


// // Заменяем второй и третий элементы
// theList[1] = 'Svekis';
// theList[2] = 'MIDDLE';


// // Заменяем четвертый элемент
// theList[3] = 'hello World';


// // Удаляем последний элемент и добавляем новый элемент в конец
// theList.pop();
// theList.push('LAST');


// // Выводим результат в консоль
// console.log(theList);
