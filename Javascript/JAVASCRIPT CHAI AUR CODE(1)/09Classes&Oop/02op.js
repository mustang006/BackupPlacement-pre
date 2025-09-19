// const user = {
//   username: "hitesh",
//   loginCount: "8",
//   signedIn: "true",

//   getuserDetails: function () {
//     // console.log("got user details from the database");
//     // console.log(`username : ${this.username}`);
//     console.log(this);
//   },
// };
// console.log(user.username);
// console.log(user.getuserDetails());

// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function user(username, loginCount, isLooggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLooggedIn = isLooggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  //   return this
  // return by default hota he hai
}

// new is very important for fresh instance
const userone = new user("Hitesh", 76, true);
const userTwo = new user("Chai", 8787, false);

// console.log(userone);

// console.log(userTwo);
console.log(userone.constructor);

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car);
//   // Expected output: true
  
//   console.log(auto instanceof Object);
//   // Expected output: true
  