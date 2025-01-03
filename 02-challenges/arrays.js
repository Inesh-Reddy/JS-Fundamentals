// Create fruits array and store some fruits values
// set the last item as number 
// assign first fruit to the variable
// reassign last array item to the actual fruit
// log both first fruit varaible and entire fruits array

const fruits = ["apple", "banana", "pineapple"]
const n = fruits.length
fruits[n-1] = 213;
console.log(fruits);
let firstFruit = fruits[0];
fruits[n-1] = "pineapple";
console.log(firstFruit);
console.log(fruits);