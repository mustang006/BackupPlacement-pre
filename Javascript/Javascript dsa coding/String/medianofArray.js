function medianofArr(arr) {
  arr.sort((a, b) => a - b);
  let n = arr.length;

  if (n % 2 === 0) {
    let mid1 = arr[n / 2 - 1];
    let mid2 = arr[n / 2];
    let MiddleMan = (mid1 + mid2) / 2;
    return MiddleMan;
  } else {
    let MiddleMan = arr[Math.floor(n / 2)];
    return MiddleMan;
  }

  
}

let arr = [7, 7, 45, 8, 45, 89, 55, 55, 8,5];
console.log(medianofArr(arr));
