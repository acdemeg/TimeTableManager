"use strict"

const user = {
  name: 'Ivan',
  age: 18
};

function printUser({name = user.name, age:years = user.age} = user) {
  console.log(name, years);
}

printUser(user);
printUser({ name: 'Ivan' });
printUser({ name: 'Pete', age: 20 });
printUser({ age: 19 });
printUser({});
printUser();
