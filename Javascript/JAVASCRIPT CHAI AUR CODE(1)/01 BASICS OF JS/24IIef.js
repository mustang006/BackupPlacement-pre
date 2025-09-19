// Immediately invoked function

function chai(){
    console.log(`Db connected`);

    
}
chai();

// ek tarika

( function aurcode(){
    // named iife
    console.log(`db connected two`);
    
})();


// dusra tarika
(
() => {
    // no named iife
    console.log(`db connected three`);
    
})();

// iife
(
(name) => {
    console.log(`db connected four ${name}`);
    
})("hitesh");

