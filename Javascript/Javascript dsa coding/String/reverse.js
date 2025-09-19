function reverString(str) {
  let reverString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverString += str[i]
  }
  return reverString
}

console.log(reverString("pornstar"));
