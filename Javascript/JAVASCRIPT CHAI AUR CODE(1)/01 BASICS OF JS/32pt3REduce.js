const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce(function(acc , currval){
//     console.log(`acc :- ${acc} , and currval :- ${currval}`);

//     return acc + currval

// } , 0)

// const myTotal = myNums.reduce((acc , currval) =>

//     acc + currval ,0  )

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

console.log(myTotal);

const myCourses = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "ps course",
    price: 2999,
  },
  {
    itemName: "ruby course",
    price: 2999,
  },
  {
    itemName: "java course",
    price: 2999,
  },
  {
    itemName: "de course",
    price: 2999,
  },
];


const pricetoPay = myCourses.reduce((acc , item)=> acc + item.price ,0)

console.log(pricetoPay);
