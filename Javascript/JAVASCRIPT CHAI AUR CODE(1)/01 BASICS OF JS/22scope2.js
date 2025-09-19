// var c = 300
let a = 300;

// if(true){

//     let a = 10
//     const b = 20
//     console.log("Inner is :"  ,a);

// }
// console.log(a);
// console.log(b);

function one() {
  const username = "hitesh";
  function two() {
    const websites = "youtube";
    console.log(username);
  }
  // console.log(websites);
  //  websites ye nahe chalega kuki chota bade se icecream le skta hai par bade chote se nahe

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const websites = "youtube";
    // console.log(username + websites);
  }
  //   console.log(website);
}

// console.log(username);

// ================interestin +++++++

// function adone(num){
//     return num+1
// }
// adone(5)

// const addTwo = function(num){
//     return num+2
// }

// addTwo(8)

console.log(adone(5));   // before installation is approved in these
function adone(num) {
  return num + 1;
}



console.log(addTwo(8));  // before installation gets an error in these


const addTwo = function (num) {
  return num + 2;
};

