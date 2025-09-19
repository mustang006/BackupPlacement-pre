// function calculateCartPrice(...num1){

//     return num1
// }

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 800));

// const user = {
//     username: "hitesh",
//     price : 199

// }

function handleObject(anyobject){
    console.log(`usernam is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "sam",
    price:399
})


const MynewArray = [200,400,5000]

function returnarray(getArray){
    return getArray[2]
}

// console.log(returnarray(MynewArray));

console.log(returnarray([100,200,300,400]));


