const greet = (name)=>{
    return "my name is" + name

}
console.log(greet(" Abhishek"));


const numbers = [1, 2, 3, 4, 5, 6];

// 1. filter: Get only even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // Output: [2, 4, 6]

// 2. map: Square each number
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25, 36]

// 3. reduce: Sum all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 21

const  Squaress = numbers.map((num)=>{
return num*num
})
console.log(Squaress);

console.log('MYCODE ');

const squaress= numbers.map((nums)=>{
    return nums*nums;
})
console.log(squaress);

const Filtering = numbers.filter((nums)=> nums % 2==0)
console.log(`Otput of Filtering is ${Filtering}`);

