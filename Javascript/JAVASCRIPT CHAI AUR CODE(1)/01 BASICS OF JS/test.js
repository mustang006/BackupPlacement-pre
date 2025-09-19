function fetchData(callback) {
 // Simulate API call with setTimeout
 setTimeout(() => {
 const data = { id: 1, name: "John" };
 callback(data);
 }, 2000);
}
console.log("Start");
fetchData(function(data) {
 console.log("Data received:", data);
});
console.log("End");
