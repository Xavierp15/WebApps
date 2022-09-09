const now = new Date(Date.now());
console.log('the current time is ');
console.log(now.toDateString());

let newDate = new Date();
setTimeout(() =>{
    newDate = Date.now();
    console.log(newDate - now);
}, 1000);