function binarySearch(arr,target) {
  let left=0
  let right=arr.length-1
  while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(arr[mid]===target){
      console.log('find the ',mid);
      return mid;
      
    }
    else if(arr[mid]<target){
      left=mid+1
    }
    else{
      right=mid-1
    }
  }
  console.log(`target not found : ${target}`);
  return -1
  
}

let arr = [5,6,9,25,45,67,99];
let target = 25
let result = binarySearch(arr,target)
console.log(result);
