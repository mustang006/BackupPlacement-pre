function printPrimeNumber(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
function isPrime(num) {
  if (num < 2) return false;
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j !== 0) {
      return false;
    }
    return true;
  }
}
let n = 15;
let result = console.log(printPrimeNumber(n));
