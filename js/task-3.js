'use strict'
function getSubscriptionPrice(type) {
 switch (type) { 
  case "starter" :
     return 0;
 case "professional" :
     return 20;
   case "organization" : 
     return 50;
   default:
     return "Invalid subscription type!";
     }
}

console.log(getSubscriptionPrice("professional")); // 20
console.log(getSubscriptionPrice("organization")); // 50
console.log(getSubscriptionPrice("starter")); // 0
console.log(getSubscriptionPrice("random")); // "Invalid subscription type!"
console.log(getSubscriptionPrice("premium")); // "Invalid subscription type!"