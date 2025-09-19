// for loop with break and continue

// for (let i = 0; i <= 10; i++) {
//     const element = i;
// if (element==5) {
//     console.log("5 is best number");
// }
//     console.log(element);

// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop value: ${i}`);

//   for (let j = 0; j <= 10; j++) {
//     // console.log(`inner loop value ${j} and inner lloop ${i} `);

//     console.log(i + '*' + j +'=' + i*j);

//   }
// }

// let myArray = ["batman" , "superman" , "spiderman"]

// console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);

// }

//   break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`The value of i is ${index}`);
// }



for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue // ek bar skip kar deta hai
  }
  console.log(`The value of i is ${index}`);
}


