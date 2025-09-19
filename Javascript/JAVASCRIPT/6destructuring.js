const colors = ["red", "green", "blue"];

// Extract values into variables
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);   // "red"
console.log(secondColor);  // "green"
console.log(thirdColor);   // "blue"


const person = {
  name: "Abhishek",
  age: 25,
  city: "Indore"
};

// Extract properties into variables
const { name, age } = person;

console.log(name);  // "Abhishek"
console.log(age);   // 25



// For loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// For...of loop
for (let color of colors) {
  console.log(color);
}

// forEach method
colors.forEach(function(color) {
  console.log(color);
});

// Arrow function in forEach
colors.forEach(color => console.log(color));
