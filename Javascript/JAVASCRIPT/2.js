let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");           // Adds to the end → ["Apple", "Banana", "Mango", "Orange"]
fruits.unshift("Pineapple");     // Adds to the beginning → ["Pineapple", "Apple", "Banana", "Mango", "Orange"]
fruits.pop();                    // Removes from the end → ["Pineapple", "Apple", "Banana", "Mango"]
fruits.shift();                  // Removes from the beginning → ["Apple", "Banana", "Mango"]
let index = fruits.indexOf("Banana"); // Finds the index of "Banana" → 1
fruits.splice(1, 1);             // Removes 1 item at index 1 → ["Apple", "Mango"]
let moreFruits = fruits.concat(["Papaya", "Grapes"]); // Combines arrays → ["Apple", "Mango", "Papaya", "Grapes"]
let hasMango = fruits.includes("Mango"); // Checks if "Mango" is in the array → true
let result = fruits.join(" - "); // Joins array into a string → "Apple - Mango"
let reversed = fruits.reverse(); // Reverses the array → ["Mango", "Apple"]
let sorted = fruits.sort();      // Sorts alphabetically → ["Apple", "Mango"]

console.log(fruits);        // ["Apple", "Mango"]
console.log(moreFruits);    // ["Apple", "Mango", "Papaya", "Grapes"]
console.log(hasMango);      // true
console.log(result);        // "Apple - Mango"
console.log(reversed);      // ["Mango", "Apple"]
