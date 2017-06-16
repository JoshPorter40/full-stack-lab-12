var p = new Promise(function(resolve, reject) {
    resolve('PROMISE VALUE');

});

p.then(console.log); //.then will always run the line of code after the promise is finished unless the next line deals with the promise
console.log('MAIN PROGRAM');