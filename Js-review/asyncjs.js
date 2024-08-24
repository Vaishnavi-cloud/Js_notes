//console.log(fetch("https://jsonplaceholder.typicode.com/todos"));
console.log("jonas");
// here without fetching and display the data in fetch it immediatedy go to jonas
//it display as Promuse {<pending  >} then moving to jonas

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
// the rrequest is actually send to the api and then it is waiting to fetch the data fromapi meanwhile to go for the next step of printing jonas
//after when the data has fetched it stores in res nad then we make it a json  then we try to print in js code
// res is what the response it gets from fetch .

console.log("jonas");
// so hee jonas will displayed then fetching  the data from the link

//promise used for daat fetching

//Async/await

// the above concept in more optimised way using async.

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
getTodos();

//an other way
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
const toy = getTodos();
console.log(toy);
console.log("vaishu");

//so in this other way it prints  <promise >wait then vaish it fetch all the data then print.

//await --stopping the code inside the func it makes function looks like lot more normal
