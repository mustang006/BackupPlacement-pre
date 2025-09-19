//promise one
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  //db calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("proimise is consumed");
});

// promise 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 ");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    // let error = true
    if (!error) {
      resolve({ username: "Hitesh", pass: "123" });
    } else {
      reject("Error:Something went wrong");
    }
  }, 1000);
});

promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

//promise 5

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    // let error = true
    if (!error) {
      resolve({ username: "javascript", pass: "123" });
    } else {
      reject("Error:JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);

//   } catch (error) {
//     console.log("E:" , error);
//   }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Something went wrong");
  });
