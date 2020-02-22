'use strict';

class Animal {

  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.energy = 0;
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

  constructor(name, color) {
    super(name, color);
    this.energy = 50;
  }

  say(message) {
    super.say('Meow' + message);
  }

  eat(food) {
    super.eat(food);
    if(this.energy < 100) console.log("don't enough food");
  }

  catchMouse() {
    if(this.energy >= 20) {
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

  constructor(name, color) {
    super(name, color);
    this.energy = 75;
  }

  say(message) {
    super.say('Woof' + message);
  }

  eat(food) {
    super.eat(food);
    if(this.energy < 100) console.log("don't enough food");
  }

  guard() {
    if(this.energy >= 25) {
      this.energy = this.energy - 25;
      console.log('you are guarded');
      return true;
    }
    else {
      console.log("don't enough energy");
      return false;
    }
  }
}

class PitBull extends Dog {

  guard() {
    if(super.guard())
      console.log('the host is protected like never before');
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

 let dog = new Dog('rex', 'gray');
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
