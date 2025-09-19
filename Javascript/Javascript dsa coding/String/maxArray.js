function maxArray(arr) {
    let max=arr[0]
  for (let i = 0; i<arr.length; i++) {
    if(max<arr[i]){
        max=arr[i]
    }
  }
  return max;
}

let arr = [7,45,8,89,55,8]

console.log(maxArray(arr));
