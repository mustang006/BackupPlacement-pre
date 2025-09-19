function removeDuplicates(arr) {
  let seen = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}
function forsorted(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result
}

let arr = [7, 7, 45, 8, 45, 89, 55, 55, 8, 5];
console.log(removeDuplicates(arr));
console.log(forsorted(arr));
