// Arrays

const arr = [1, 2, 3, 4, 5];

const Myarray = new Array(8, 9, 7, 5, 6);

console.log(arr[0]);

console.log(Myarray[2]);

/// Array methods
Myarray.push(55);

console.log(Myarray);

Myarray.pop();

Myarray.unshift(601); // it shifts all the array and add 601 in 1st place

Myarray.shift(); //remove the first element

console.log(Myarray.includes(9));

console.log(Myarray.indexOf(5));

console.log(Myarray);

const newArr = Myarray.join();

console.log(Myarray);

console.log(newArr);


// slice , splice

console.log("A" , Myarray);

const myn1 = Myarray.slice(1,3)
console.log(myn1);
console.log("B" , Myarray);

const myn2 = Myarray.splice(1,4)
console.log(myn2);

// it deletes the whole array in Myarry form 1 to  4
console.log(Myarray);

