let freq = {};

function getFrequency(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]] += 1;
    } else {
      freq[arr[i]] = 1;
    }
  }
  return freq;
}


let arr = [1, 3, 5, 5, 1];
let freqResult =getFrequency(arr) 
for(let num in freqResult){
   if (freqResult[num] === 1) {
    console.log("Single occurring element is:", Number(num));
}}