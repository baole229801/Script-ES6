// var a = {} object not scope

if (true) {
    //var x = 10; 
    let x = 10; //only in if scope
}

//console.log(x);

for (let     i = 0; i < 4; i++) {
    console.log(i);
}

console.log(i);