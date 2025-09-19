function reverArr(arr) {
  let revArr = [];
  let index = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr[index] = arr[i];
    index++;
  }
  return revArr;
}
function reverArrProper(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

let arr = [3, 4, 7, 1, 9];
console.log(reverArr(arr));
console.log(reverArrProper(arr));
