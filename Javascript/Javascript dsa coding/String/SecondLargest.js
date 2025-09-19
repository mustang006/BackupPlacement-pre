// Function to move all 0's to the end of the array while keeping the order of non-zero elements
function SecontlargestFn(arr) {
 let largest =-Infinity
 let Secontlargest =-Infinity

  // First loop: Move all non-zero elements to the front
  for (let num of arr) {
    if(num>largest){
      Secontlargest=largest
      largest=num
    }
    else if(num>Secontlargest && num<largest){
      Secontlargest=num
    }

  }
  return Secontlargest
   

 
}

// Example array
let arr = [0, 1, 0, 3, 8, 77,550];

// Call the function and print the result
console.log(SecontlargestFn(arr)); // Output: [1, 3, 8, 0, 0, 0]
