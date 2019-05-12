const debug = name => {   // higher function
    return str => {
        console.log(`[${name}] ${str}`);
    }
}

const log = debug('Mouse');
log('Error happened');

// higher order function

const waitAndRun = (ms, func) => {
    setTimeout(func, ms);
}

const run = () => {
    console.log('Running...');
}

waitAndRun(2000, run);