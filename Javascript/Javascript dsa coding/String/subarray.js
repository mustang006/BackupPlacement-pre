function findSubarray() {
  let j = 0;
  let i = 0;
  let csum = 0;
  let ans = [];
  let sum = 14
  let n=arr.length
  while (j < n) {

    csum = csum + arr[j];
    if (csum < sum) {
      j++
    } else if (csum > sum) {
      while(csum>sum){
        csum=csum-arr[i]
        i++
      }
      if(csum===sum){
        ans.push(i);
      ans.push(j);
      return ans

      }
      j++
    } else {
      ans.push(i);
      ans.push(j);
      return ans
    }
  }
}
let arr=[1,3,5,7,2]
console.log(findSubarray());
