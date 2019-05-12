var mouse = require('./index');

function run(cb) {
    console.log('running...');
    cb();     
};

run(mouse.sayHi.bind(mouse));