const marvel_heroes = ["thor", "ironman", "Widow", "America"];

const Dc_heroes = ["superman", "Wonderwoman", "flash"];

// marvel_heroes.push(Dc_heroes)

// console.log(marvel_heroes);

const allheroes = marvel_heroes.concat(Dc_heroes);

console.log(allheroes);

// Spread operator

const all_new_heroes = [...Dc_heroes, ...marvel_heroes];

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6, 7], 8, 9, [10, 12, [13, 14]]];

// for this type of array we can merge all arary into one

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Abhishek"));

console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // interesting  it give empty string because we have to define the key

let score1 = 100;
let score2 = 300;
let score3 = 200;

console.log(Array.of(score1,score2,score3));
