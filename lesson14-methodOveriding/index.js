// method overriding

class CoffeeMachine {
    makeCoffee() {
        console.log('making coffee...');
    }
}

class SpecialCoffeeMachine extends CoffeeMachine {
    makeCoffee(onFinish) {
        console.log('making coffee and do something...');
        onFinish();
    }
}

const coffeeMachine = new SpecialCoffeeMachine();

const finish = () => {
    console.log('peep peep...');
}

coffeeMachine.makeCoffee(finish);