class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        return "My name is " + this.name;
    }
    showStats(){
        return this.sayName() + ", my health is " + this.health + ", my speed is " + this.speed + ", and my strength is " + this.strength;
    }
    drinkSake(){
        this.health += 10;
        return `${this.name}'s health rose by 10!'`
    }
}

const ninja1 = new Ninja("Bianca", 100);
console.log(ninja1.sayName());
console.log(ninja1.showStats());
console.log(ninja1.drinkSake());
console.log(ninja1.showStats());

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const drink = super.drinkSake();
        let num = Math.floor(Math.random() * 3);
        if(num === 0){
            return "Eat bitter, taste sweet. " + drink;
        }
        if(num === 1){
            return "Fall down seven, get up eight. " + drink;
        }
        if(num === 2){
            return "A journey of a thousand miles begins with a single step. " + drink;
        }
    }
}

const sensei1 = new Sensei("Christian");
console.log(sensei1.speakWisdom());