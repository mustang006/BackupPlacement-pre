// const tinder = new Object()   // singleton object

const tinder = {};

console.log(tinder);

tinder.id = "123456";
tinder.username = "Samay";
tinder.isLoggedin = true;

// console.log(tinder.username);

const regularuser = {
  email: "abhishek@google.com",
  fullname: {
    username: {
      firstname: "abhi",
      lastname: "patil",
    },
  },
};

// console.log(regularuser.fullname.username);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4  = {obj1,obj2};
// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = {...obj1 , ...obj2,...obj3}

// console.log(obj4);

const users = [

    {
        id:1,
        email:"A@google.com"
    }
    ,
    {
        id:1,
        email:"A@google.com"
    }
    ,
    {
        id:1,
        email:"A@google.com"
    }
    ,
    {
        id:1,
        email:"A@google.com"
    }
]

users[1].email
console.log(tinder);

console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty('isLoggedin'));
