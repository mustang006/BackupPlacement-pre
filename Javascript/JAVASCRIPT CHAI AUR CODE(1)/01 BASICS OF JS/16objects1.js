// singleton
// Object.create

// object literals\

const mySymbol = Symbol("key1");

const jsuser = {
  "full name": "Hitesh parmar",
  age: 18,
  [mySymbol]: "Mykey1",
  location: "jaipur",
  email: "hiteh@google.com",
  isloggedIn: true,
  lastloginDay: ["Monday", "Saturday"],
};

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySymbol]);  // it is different

jsuser.email = "Abhi@google.com";

//  for freezing the object

// Object.freeze(jsuser)
jsuser.email = "jamle@google.com";

console.log(jsuser);

jsuser.greeting = function () {
  console.log("hello js user");
};

jsuser.greetingTwo = function () {
  console.log(`hello js user  ${this["full name"]}`);
};

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
