function PrintIntersection(arr1, arr2) {
  let size = arr1.length + arr2.length;
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        arr2[j]=null
        break
      }
    }
  }
  return result;
}

let arr1 = [1, 3, 5, 5, 1];
let arr2 = [2, 1, 3, 5, 4];

console.log(PrintIntersection(arr1, arr2));
