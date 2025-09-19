function sayMyname() {
  console.log("a");
  console.log("b");
  console.log("h");
  console.log("i");
  console.log("a");
  console.log("a");
}
// sayMyname();
// parameters

// function Addtwono(number1, number2) {
//   console.log(number1 + number2);
// }

// function Addtwono(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }

function Addtwono(number1, number2) {
    return number1 + number2;
}

const result = Addtwono(3, 4); // this are arguments
// console.log(`result is : ${result}`);

function loginUser(username = "sam"){
    if(username === undefined){
        console.log("please enter your name");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUser("abhi"));