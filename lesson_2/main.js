'use strict';

const Event = require('./event.js');
const User = require('./user.js');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

module.exports.getRandomInt = getRandomInt;
module.exports.readLine = readLine;

async function runApp() {
  const user = await User.registerUser();
  Event.generateOfEvents(30)
  Event.eventPresent();
  Event.freeTimeSpacePresent();
  await Event.createEvent(user);
  rl.close();
  const schedule = await User.makeSchedule(Event.storageUserIdEventsMap, user.id);
  await Event.saveScheduleToFile(schedule, user.name);
  console.log(schedule);
}

runApp();

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function readLine(str) {
  return new Promise(resolve => {
    rl.question(str, answer => {
      resolve(answer);
    });
  });
}
