const coding = ["js", "ruby", "c++", "java"];

// forEach loop

// coding.forEach(function (val1) {
//     console.log(val1);

// });

// coding.forEach( (val1) =>{
//     console.log(val1);

// })

// function printMe(item){
//     console.log(item);

// }

// coding.forEach(printMe)

// coding.forEach( (item , index , arr) =>{
//     console.log(item, index , arr);

// } )

const myCoding = [
  {
    langName: "javascript",
    langFilename: "js",
  },
  {
    langName: "Java",
    langFilename: "jv",
  },
  {
    langName: "Python",
    langFilename: "py",
  },
  {
    langName: "Ruby",
    langFilename: "rs",
  },
];


myCoding.forEach( (item)=>{
    console.log(item.langFilename);
    
})