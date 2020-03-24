'use strict';

const messages = require('./messages.js');
const regexp = require('./registrationRegExp.js');
const main = require('./main.js');
const dateUtils = require('./dateUtils');

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

async function registerUser() {
  let name = await (async function getAnswer() {
    let answer = await main.readLine(`\x1b[32m${messages.messageEnum.Name}\x1b[0m`)

    if(!answer.match(regexp.name)) {
      console.log(`\x1b[33m${messages.errorEnum.Error_Name}\x1b[0m`);
      return getAnswer();
    }
    else return answer;

  })();
  console.log(name);

  let email = await (async function getAnswer() {
    let answer = await main.readLine(`\x1b[32m${messages.messageEnum.Email}\x1b[0m`)

    if(!answer.match(regexp.email)) {
      console.log(`\x1b[33m${messages.errorEnum.Error_Email_Validate}\x1b[0m`);
      return getAnswer();
    }
    else return answer;

  })();
  console.log(email);
  console.log();

  return new User(main.getRandomInt(10000, 99999), name, email);
 }

async function makeSchedule(storageUserIdEventsMap, userId) {
  const userEvents = [];
  const eventsArray = storageUserIdEventsMap.get(userId);
  const startWeek = dateUtils.getWeekStartDate().getTime();
  const endWeek = dateUtils.getWeekEndDate().getTime();
  const msInDay = 86400000;

  for(let date = startWeek; date <= endWeek + 1; date = date + msInDay) {
    let eventsOnDate = eventsArray.filter( el => Math.abs(date - el.dateStart.getTime()) < msInDay/2 );
    if(eventsOnDate.length !== 0){
      let arr = eventsOnDate.map(el => `${el.title}  ${el.dateStart.getHours()}:${el.dateStart.getMinutes()} - ${el.dateEnd.getHours()}:${el.dateEnd.getMinutes()}`);
      userEvents.push({ date: `${eventsOnDate[0].dateStart.getDate()}  ${eventsOnDate[0].dateStart.toLocaleString('eng', { month: 'long' })}  ${eventsOnDate[0].dateStart.getFullYear()} year`, events: arr});
    }
  }

  const dateNow = new Date(Date.now());
  
  return {
    id_shedule: main.getRandomInt(10000, 99999),
    user_id: userId,
    create_date: `${dateNow.getDate()}  ${dateNow.toLocaleString('eng', { month: 'long' })}  ${dateNow.getFullYear()} year`,
    events: userEvents
  };
}


module.exports.registerUser = registerUser;
module.exports.makeSchedule = makeSchedule;
