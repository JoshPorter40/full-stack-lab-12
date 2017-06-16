var greeting = Promise.resolve('Hello Wolrd!');
var warning = Promise.reject('Tornado Detected');

greeting.then(console.log);
// warning.then(null, console.log);
warning.catch(console.log);

// .catch is only for catching errors and only takes in what you want to happen when it catches an error
// .then takes in two things: 1st is what happens if there is an error; 2nd is if there is not