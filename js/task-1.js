'use strict';
//Работа с объектами и массивами

let company = { companyName: "Healthy Candy",
                activity: ["food manufacturing",
                "improving kids' health", "manufacturing toys"],
    addresses: [
        {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
        }
    ],
                yearOfEstablishment: 2021
};

console.log(company);

const streetName = `${company.addresses[1].street} ${company.addresses[0].street}`; // Получение названия улицы адреса

console.log(streetName);