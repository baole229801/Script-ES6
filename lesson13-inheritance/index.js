class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating...!`);
    }
}

class Bird extends Animal {
    fly() {
        console.log(`${this.name} is flying...!`);
    }
}

const bird = new Bird('Hoa mi');
bird.fly();