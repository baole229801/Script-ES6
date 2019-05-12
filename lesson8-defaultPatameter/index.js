// Default Parameters

// const greeting = name => {
//     if (name === undefined) {
//         name = 'pal';
//     }
//     return `Hi ${name}!`;
// };

function greeting(name = 'pal', language = 'ja') {
    if (language === 'en') {
        return `Hi ${name}!`;
    }
    if (language === 'ja') {
        return `Konnichiwa ${name}!`;
    }
    return `Xin Chao ${name}`;
};

console.log(greeting('Bao'));