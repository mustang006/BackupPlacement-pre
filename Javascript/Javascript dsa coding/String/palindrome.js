function palindrome(str) {
  let right = str.length-1;
  let left = 0;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[left++] !== str[right--]) {
      return false;
    }
    return true;
  }
}


console.log(palindrome("level"));
