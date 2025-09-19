// Primitive data types
let name = "Abhishek";     // String
let age = 25;              // Number
let isStudent = true;      // Boolean
let height = null;         // Null
let weight;                // Undefined
let symbolId = Symbol("id"); // Symbol

// Non-primitive data types (objects)
let person = {
  firstName: "Abhishek",
  lastName: "Patil",
  age: 25
};

let numbers = [1, 2, 3, 4, 5]; // Array (also an object)

function greet() {
  return "Hello, world!";
}

// Displaying types
console.log(typeof name);       // "string"
console.log(typeof age);        // "number"
console.log(typeof isStudent);  // "boolean"
console.log(typeof height);     // "object" (weird behavior in JS)
console.log(typeof weight);     // "undefined"
console.log(typeof symbolId);   // "symbol"

console.log(typeof person);     // "object"
console.log(typeof numbers);    // "object"
console.log(typeof greet);      // "function"
