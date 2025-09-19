function frequency(arr) {
  const freq = {};
  for (let item of arr) {
    if (freq[item]) {
      freq[item] = freq[item] + 1;
    } else {
      freq[item] = 1;
    }
  }
  return freq
}

let arr = [7, 7,45, 8,45, 89, 55,55, 8];

console.log(frequency(arr));
