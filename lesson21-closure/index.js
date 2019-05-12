// closure 
// garbage collector    

const sum = (a, b) => {
    const c = a + b;
    // console.log(c);

    return function() {
        console.log(c);
    };
}

sum(1, 2)();

const debug = name => {
    return str => {
        console.log(`[${name}] ${str}`);
    }
}

const log = debug('Mouse');
log('Error happened');