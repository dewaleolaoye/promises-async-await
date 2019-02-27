// A promise Example
// function delay(t) {
//   return new Promise(function(resolve) {
//     return setTimeout(resolve, t);
//   });
// }

// function logHi() {
//   console.log("Hi");
// }

// delay(2000).then(logHi);

// function secondLog() {
//   console.log("Hello");
// }

// delay(3000).then(secondLog);

// Chaining Promises
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 2000);
}).then(result => {
  console.log(result);
  return result + 2;
});
