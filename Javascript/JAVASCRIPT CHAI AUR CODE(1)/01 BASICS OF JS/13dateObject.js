/// dates

let myDate = new Date();

console.log(myDate); // not readable
console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

let createMydate = new Date("01-11-2025");
// let createMydate = new Date(2025, 2, 13)

console.log(createMydate.toString());
console.log(createMydate.toDateString());
console.log(createMydate.toLocaleString());

let MyTimeStamp = Date.now();

console.log(MyTimeStamp);
console.log(createMydate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
