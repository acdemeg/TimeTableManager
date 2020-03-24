'use strict';

const main = require('./main.js');
const messages = require('./messages.js');
const dateUtils = require('./dateUtils');
const daysOfWeekEnum = require('./messages.js').daysOfWeekEnum;
const regexp = require('./registrationRegExp.js');
const fs = require('fs');

let storageDayEventListMap = new Map();
let storageUserIdEventsMap = new Map();
let storageDayFreeTimeMap = new Map();
let temporaryDayEvetnsTimePointMap = new Map();
initializeStorageDayEventListMap();
initializeStorageDayFreeTimeMap();
initializeTemporaryDayEvetnsTimePointMap();

class Event {
  constructor(id, title, dateStart, dateEnd) {
    this.id = id;
    this.title = title;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
  }

  static makeTitleEvent(firstWordLength, secondWordLength) {
    let title = '';
    let variants = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < firstWordLength; i++ ) {
      title += variants.charAt(Math.round(Math.random() * (variants.length - 1)));
    }

    title += ' ';

    for(let i = 0; i < secondWordLength; i++ ) {
      title += variants.charAt(Math.round(Math.random() * (variants.length - 1)));
    }

    return title;
  }

  static generateOfEvents(countEvents) {
    for(let i = 0; i < countEvents; i++) {
      let generatorDates = dateUtils.getDateEvent(storageDayEventListMap);
      let event = new Event(main.getRandomInt(10000, 99999), Event.makeTitleEvent(4, 6),
        generatorDates.next().value, generatorDates.next().value);
      storageDayEventListMap.get(event.dateStart.getDay()).push(event);
      temporaryDayEvetnsTimePointMap.get(event.dateStart.getDay()).push({
        spaceStart: event.dateStart,
        spaceEnd: event.dateEnd
      });
    }
    Event.setTimeSpaceBetweenEvents();
  }

  static setTimeSpaceBetweenEvents(){
    for(let events of temporaryDayEvetnsTimePointMap.values()) {
      if(events.length === 0){
        continue;
      }
      events.sort((a, b) => a.spaceStart - b.spaceStart);
      events.unshift({
        spaceEnd: events[0].spaceStart,
        spaceStart: new Date(new Date(events[0].spaceStart.getTime()).setHours(8, 0, 0, 0))
       })

      events.forEach((el, i, events) => {
        if(i === 0) {
          storageDayFreeTimeMap.get(events[i].spaceStart.getDay()).push({
            spaceStart: events[i].spaceStart,
            spaceEnd: events[i].spaceEnd
          })
         return;
        }

       events[i].spaceStart = events[i].spaceEnd;
       events[i].spaceEnd = (i === events.length - 1)
         ? new Date(new Date(events[i].spaceEnd.getTime()).setHours(19, 0, 0, 0))
           : events[i + 1].spaceStart;

         storageDayFreeTimeMap.get(events[i].spaceStart.getDay()).push({
           spaceStart: events[i].spaceStart,
           spaceEnd: events[i].spaceEnd
         })
      })
    }
  }

  static addTimeSpacesBetweenEvents(){
    for(let events of temporaryDayEvetnsTimePointMap.values()){
      if(events.length === 0){
        continue;
      }
      events.forEach(el => {

        const array = storageDayFreeTimeMap.get(el.spaceStart.getDay());

        const eventTime = dateUtils.searchNearTimeSpaceStart(
          el.spaceStart,
          array
        );

        array.push({
          spaceStart: eventTime.spaceStart,
          spaceEnd: el.spaceStart
        });

        array.push({
          spaceStart: el.spaceEnd,
          spaceEnd: eventTime.spaceEnd
        });

        // remove interval that divide
        array.splice(array.indexOf(eventTime), 1);

      })
    }
  }
}

function eventPresent() {
  console.log('\x1b[33m\x1b[1m');
  console.log('                   ' + messages.messageEnum.List_Events);
  console.log('\x1b[0m');

  for(let day of storageDayEventListMap) {
    console.log(`\x1b[32m\x1b[1m ${dateUtils.getTitleDay(day[0])}     ${day[1][0].dateStart.getDate()}  ${day[1][0].dateStart.toLocaleString('eng', { month: 'long' })}  ${day[1][0].dateStart.getFullYear()} year \x1b[0m`);
    console.log();
    for(let event of day[1].sort((a, b) => a.dateStart - b.dateStart)) {
      if(event.dateEnd > Date.now()){
        console.log(`\x1b[36m ${event.title} \x1b[0m ${event.dateStart.getHours()}:${event.dateStart.getMinutes()} - ${event.dateEnd.getHours()}:${event.dateEnd.getMinutes()}\n`);
      }
      else {
        console.log(`\x1b[36m ${event.title} \x1b[0m ${event.dateStart.getHours()}:${event.dateStart.getMinutes()} - ${event.dateEnd.getHours()}:${event.dateEnd.getMinutes()}  \x1b[31m event completed \x1b[0m\n`);
      }
    }
    console.log();
  }
}

function freeTimeSpacePresent(){
  console.log('\x1b[33m\x1b[1m');
  console.log('                   ' + messages.messageEnum.List_Time_Space);
  console.log('\x1b[0m');

  for(let day of storageDayFreeTimeMap){
    if(day[1].length === 0)
      continue;
    console.log(`\x1b[32m\x1b[1m ${dateUtils.getTitleDay(day[0])}     ${day[1][0].spaceStart.getDate()}  ${day[1][0].spaceStart.toLocaleString('eng', { month: 'long' })}  ${day[1][0].spaceStart.getFullYear()} year \x1b[0m`);
    console.log();
    for(let timeSpace of day[1].sort((a, b) => a.spaceStart - b.spaceStart)){
        console.log(`\x1b[35m time space \x1b[0m ${timeSpace.spaceStart.getHours()}:${timeSpace.spaceStart.getMinutes()} - ${timeSpace.spaceEnd.getHours()}:${timeSpace.spaceEnd.getMinutes()}\n`);
    }
      console.log();
  }
}

async function createEvent(user) {

    storageUserIdEventsMap.set(user.id, []);
    let exit = 'yes';

    while(exit === 'yes') {

      const titleEvent = await (async function getAnswer() {
        let answer = await main.readLine(`\x1b[32m${messages.messageEnum.Title_Event}\x1b[0m`)

        if(!answer.match(regexp.title)) {
          console.log(`\x1b[33m${messages.errorEnum.Error_Title}\x1b[0m`);
          return getAnswer();
        }
        else return answer;

      })();

      let date;

      while (true) {
        date = await (async function getAnswer() {
          let answer = await main.readLine(`\x1b[32m${messages.messageEnum.Date_Event}\x1b[0m`)

          if(!answer.match(regexp.date)) {
            console.log(`\x1b[33m${messages.errorEnum.Error_Date}\x1b[0m`);
            return getAnswer();
          }
          else return answer;

        })();

        if(new Date(Date.parse(`${date}`)) < dateUtils.getWeekStartDate()
            || new Date(Date.parse(`${date}`)) > dateUtils.getWeekEndDate()
          ) {
          console.log(`\x1b[33m${messages.errorEnum.Date_Assign_Error}\x1b[0m`);
          continue;
        }
        if(!dateUtils.isSpaceTimeInDay(storageDayFreeTimeMap,
            new Date(Date.parse(`${date}`)).getDay())
          ) {
          console.log(`\x1b[33m${messages.errorEnum.Day_Assign_Error}\x1b[0m`);
          console.log(`\x1b[33m${messages.messageEnum.Day_Assign}\x1b[0m`);
          continue;
        }
        else break;
      }

      let dateEventStart;
      let dateEventEnd;

      while(true) {

        const timeStart = await (async function getAnswer() {
          let answer = await main.readLine(`\x1b[32m${messages.messageEnum.Time_Event_Start}\x1b[0m`)

          if(!answer.match(regexp.time)) {
            console.log(`\x1b[33m${messages.errorEnum.Error_Time}\x1b[0m`);
            return getAnswer();
          }
          else return answer;

        })();

        const timeEnd = await (async function getAnswer() {
          let answer = await main.readLine(`\x1b[32m${messages.messageEnum.Time_Event_End}\x1b[0m`)

          if(!answer.match(regexp.time)) {
            console.log(`\x1b[33m${messages.errorEnum.Error_Time}\x1b[0m`);
            return getAnswer();
          }
          else return answer;

        })();

        dateEventStart = new Date(Date.parse(`${date}T${timeStart}`));
        dateEventEnd = new Date(Date.parse(`${date}T${timeEnd}`));

        if(dateEventEnd <= dateEventStart) {
          console.log(`\x1b[33m${messages.errorEnum.Error_Create_Event}\x1b[0m`);
          continue;
        }
        else if(dateUtils.validateDateEvent(dateEventStart.getTime(), dateEventEnd.getTime(), storageDayEventListMap))
          break;
        else {
          console.log(`\x1b[33m${messages.errorEnum.Time_Assign_Error}`);
          console.log('   and  ');
            console.log(`${messages.errorEnum.Error_Event_Intersect}\x1b[0m`);
          continue;
        }
      }

      const event = new Event(
        main.getRandomInt(10000, 99999),  titleEvent,
        dateEventStart, dateEventEnd
      );
      storageUserIdEventsMap.get(user.id).push(event);
      storageDayEventListMap.get(event.dateStart.getDay()).push(event);

      temporaryDayEvetnsTimePointMap.clear();
      initializeTemporaryDayEvetnsTimePointMap();
      temporaryDayEvetnsTimePointMap.get(event.dateStart.getDay()).push({
        spaceStart: event.dateStart,
        spaceEnd: event.dateEnd
      });

      Event.addTimeSpacesBetweenEvents();

      freeTimeSpacePresent();

      exit = await main.readLine(`\x1b[32m${messages.messageEnum.Create_Events_Continue}\x1b[0m`)
    }
}

function initializeStorageDayEventListMap(){
  storageDayEventListMap.set(daysOfWeekEnum.Monday, []);
  storageDayEventListMap.set(daysOfWeekEnum.Tuesday, []);
  storageDayEventListMap.set(daysOfWeekEnum.Wednesday, []);
  storageDayEventListMap.set(daysOfWeekEnum.Thursday, []);
  storageDayEventListMap.set(daysOfWeekEnum.Friday, []);
  storageDayEventListMap.set(daysOfWeekEnum.Sanday, []);
  storageDayEventListMap.set(daysOfWeekEnum.Saturday, []);
}

function initializeStorageDayFreeTimeMap() {

  storageDayFreeTimeMap.set(daysOfWeekEnum.Monday, []);
  storageDayFreeTimeMap.set(daysOfWeekEnum.Tuesday, []);
  storageDayFreeTimeMap.set(daysOfWeekEnum.Wednesday, []);
  storageDayFreeTimeMap.set(daysOfWeekEnum.Thursday, []);
  storageDayFreeTimeMap.set(daysOfWeekEnum.Friday, []);
  storageDayFreeTimeMap.set(daysOfWeekEnum.Sanday, []);
  storageDayFreeTimeMap.set(daysOfWeekEnum.Saturday, []);
}

function initializeTemporaryDayEvetnsTimePointMap() {

  temporaryDayEvetnsTimePointMap.set(daysOfWeekEnum.Monday, []);
  temporaryDayEvetnsTimePointMap.set(daysOfWeekEnum.Tuesday, []);
  temporaryDayEvetnsTimePointMap.set(daysOfWeekEnum.Wednesday, []);
  temporaryDayEvetnsTimePointMap.set(daysOfWeekEnum.Thursday, []);
  temporaryDayEvetnsTimePointMap.set(daysOfWeekEnum.Friday, []);
  temporaryDayEvetnsTimePointMap.set(daysOfWeekEnum.Sanday, []);
  temporaryDayEvetnsTimePointMap.set(daysOfWeekEnum.Saturday, []);
}

async function saveScheduleToFile(schedule, userName) {

  console.log("saveScheduleToFile")
  console.log(schedule)

  //checking exitst of Folder -> create new folder if Error
  await fs.promises.access('./Time_tables')
    .catch(() => {
        fs.mkdirSync('./Time_tables');
    });

  let jsonSchedule = JSON.stringify(schedule, null, 2);

  fs.writeFile(`./Time_tables/Schedule-${userName}.txt`, jsonSchedule, (err) => {
    if(err) {
      console.log(messages.errorEnum.Error_File);
      throw err;
    }
    console.log(messages.messageEnum.File_Saved);
  });
}

module.exports.generateOfEvents = Event.generateOfEvents;
module.exports.eventPresent = eventPresent;
module.exports.freeTimeSpacePresent = freeTimeSpacePresent;
module.exports.createEvent = createEvent;
module.exports.storageUserIdEventsMap = storageUserIdEventsMap;
module.exports.saveScheduleToFile = saveScheduleToFile;
