const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 2
    }
}
// shallow cloning
const obj2 = {
    ...obj1,
    length: 2
}

// for (let key in obj1) {
//     obj2[key] = obj1[key];
// }

obj2.c = 5;
obj2.d.e = 10;

// deep cloning 

console.log({obj1, obj2});