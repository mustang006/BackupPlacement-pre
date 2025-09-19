const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage()

// user.username = "smasher"

// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   // this only works in the objects

// }

// chai()

// const chai =function (){
//     let username ="hitesh"
//     console.log(this.username);

// }

// const chai = () => {
//   let username = "hitesh";
//   console.log(this);
// };

// chai();

// () =>{

// }

// const addtwo = (num1,num2) => {

//     return num1+num2

// }
// console.log(addtwo(5,5));

// htis is called implicit return yane return nahe likhna

// and paranthesis lagaoge to return nahe likhna padega and curly lagaoge to return likhna padega

// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3, 4));

// const addTwo = (num1,num2) => num1+num2

// console.log(addTwo(3,4));

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));

const myArray = [12, 5, 8, 9];

myArray.forEach(() => {
  console.log(myArray);
});
