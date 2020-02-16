'use strict';

class Animal {

  constructor(name, color, energyOfAnimal = 0) {
    this.name = name;
    this.color = color;
    this.setEnergy(energyOfAnimal);
  }

  setEnergy(count) {
    this.energy = (count > 100) ? 100 : count;
  }

  get nameAndColorOfAnimal() {
    return `${this.name} ${this.color}`;
  }

  eat(food) {
    let countEnergy = this.energy + food;
    this.energy = (countEnergy >= 100) ? 100 : countEnergy;
  }

  say(message) {
    console.log(message);
  }
}

class Cat extends Animal {

  constructor(name, color, energy = 50) {
    super(name, color, energy);
  }

  say(message) {
    super.say('Meow' + message);
  }

  eat(food) {
    super.eat(food);

    if(this.energy < 100) console.log("don't enough food");
  }

  catchMouse() {
    if(this.energy - 20 >= 0) {
      this.energy = this.energy - 20;
      return console.log('mouse had been catched');
    }
    else {
      return console.log("don't enough energy");
    }
  }

}

class BritishShorthair extends Cat {

  catchMouse() {
    console.log('British cats are too lazy to catch mice');
  }
}

class Dog extends Animal {

  constructor(name, color, energy = 75) {
    super(name, color, energy);
  }

  say(message) {
    super.say('Woof' + message);
  }

  eat(food) {
    super.eat(food);

    if(this.energy < 100) console.log("don't enough food");
  }

  guard() {
    if(this.energy - 25 >= 0) {
      this.energy = this.energy - 25;
      return console.log('you are guarded');
    }
    else {
      return console.log("don't enough energy");
    }
  }
}

class PitBull extends Dog {

  guard() {
    console.log('the host is protected like never before');
    super.guard();
  }
}

//Test calls

 let cat = new Cat('baks', 'white');
 console.log(cat.nameAndColorOfAnimal);
 console.log(cat.energy);
 cat.say(' want eat');
 cat.eat(20);
 cat.catchMouse();

 console.log();
 console.log();
 console.log();

 let britishCat = new BritishShorthair('ghost', 'black');
 britishCat.catchMouse();

 console.log();
 console.log();
 console.log();

 let dog = new Dog('rex', 'gray', 150);
 console.log(dog.nameAndColorOfAnimal);
 console.log(dog.energy);
 dog.say(' want eat');
 dog.eat(10);
 dog.guard();

 console.log();
 console.log();
 console.log();

 let pitBull = new PitBull('evilRex', 'black');
 console.log(pitBull.nameAndColorOfAnimal);
 console.log(pitBull.energy);
 pitBull.say(' want eat');
 pitBull.eat(10);
 pitBull.guard();
