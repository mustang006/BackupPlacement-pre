function fibonacci(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);

    sum = a + b;
    a = b;
    b = sum;
  }
}

let arr = [7, 45, 8, 89, 55, 8];

console.log(fibonacci(10));
