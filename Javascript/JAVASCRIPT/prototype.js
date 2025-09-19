let parent = { greet() { console.log("Hello"); } };
let child = Object.create(parent);
child.greet(); // Hello (inherited from parent)


let yt = {
    greet(){
    console.log('Hello');
    
}}
let bgmi=Object.create(yt)
bgmi.greet()