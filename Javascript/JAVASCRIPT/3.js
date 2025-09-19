let person = {
  name: "Abhishek",
  age: 25,
  isStudent: true
};

// Accessing properties
console.log(person.name);        // "Abhishek"
console.log(person["age"]);      // 25

// Adding a new property
person.city = "Indore";

// Updating a property
person.age = 26;

// Deleting a property
delete person.isStudent;

// Checking if a key exists
console.log("name" in person);   // true

// Looping through properties
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person));    // ["name", "age", "city"]
console.log(Object.values(person));  // ["Abhishek", 26, "Indore"]
console.log(Object.entries(person)); // [["name", "Abhishek"], ["age", 26], ["city", "Indore"]]

// Cloning an object
let clone = Object.assign({}, person);

// Merging objects
let extra = { country: "India" };
let merged = { ...person, ...extra };

// Freezing the object (makes it immutable)
Object.freeze(person);
person.age = 30;  // Will not change

console.log(person); // { name: "Abhishek", age: 26, city: "Indore" }
