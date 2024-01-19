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

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'