// for of 


["" , "" , ""]

// [{},{},{},{},{},{},]

const arr = [1,2,3,4,5,6]
// forof loop
for (const num of arr) {

    console.log(num);
    
}

const str = "Hello world"

for (const i of str) {
    console.log(`Each char is :- ${i}`);
    
    
}


// Maps ARE USED TO STOR UNIQUE VALUES KEY AND VALUES

// map is not iterable

const map =new Map()
map.set("IND" ,"INDIA")
map.set("USA" , "UNITED STATES OF AMERICA")
map.set("FR" , "FRANCE")
map.set("ENG" , "ENGLAND")

console.log(map);

for (const [key, value] of map) {
    console.log(key , ':-', value);
    
}

const myObject = {
    'gmae1' : 'NFS',
    'game2' : 'spider man'
}

// // it is not working becaus there is another way to run it

// for (const [key, value] of myObject) {
//     console.log(key , ':-', value);
    
// };



for (const key in map) {
    console.log(key);
    
   
}
