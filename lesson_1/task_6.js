"use strict"

const user = {
  name: 'Ivan',
  age: 18
};

function printUser({name, age:years} = user) {
  console.log(name, years);
}

printUser(user);
printUser({ name: 'Ivan' });
printUser({ age: 19 });
printUser({});
printUser();
