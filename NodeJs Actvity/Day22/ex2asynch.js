let x = 225;
let y = 310;
let z = x + y;
console.log(`z = ${z}`);
setTimeout(() => {
    console.log('inside callback');
}, 0); // timeout is 0s
console.log('end of program');