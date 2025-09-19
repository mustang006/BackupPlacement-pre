// Function to move all 0's to the end of the array while keeping the order of non-zero elements
function MoveZeroes(arr) {
  let index = 0; // Pointer to place the next non-zero element

  // First loop: Move all non-zero elements to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i]; // Place the non-zero element at the 'index' position
      index++;              // Move index forward for the next non-zero element
    }
  }

  // Second loop: Fill the remaining positions in the array with 0
  while (index < arr.length) {
    arr[index] = 0; // Fill the rest with zeroes
    index++;
  }

  // Return the modified array with all zeroes at the end
  return arr;
}

// Example array
let arr = [0, 1, 0, 3, 8, 0];

// Call the function and print the result
console.log(MoveZeroes(arr)); // Output: [1, 3, 8, 0, 0, 0]
