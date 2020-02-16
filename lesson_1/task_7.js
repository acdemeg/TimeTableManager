'use strict';

const userProfile = {
  gender: 'Male',
  firstName: 'Ivan',
  lastName: 'Ivanov',
  location: {
    city: 'Omsk',
    country: 'Russia'
  },
  age: 19,
  films: ['Batman', 'Iron Man', 'Scrubs']
};

const {
  firstName:name,
  lastName:secondName,
  age = null,
  films = [],
  location: {
    city:currentCity = 'Unknown City'
    }
} = userProfile;

console.log(name);
console.log(secondName);
console.log(age);
console.log(currentCity);
console.log(films);
