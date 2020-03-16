const messages = require('./messages.js');

const msInDay = 86400000;
const msInHour = 3600000;

function* getDateEvent(storageDayEventListMap) {
  let gap = Math.round(Math.random() * msInHour) + msInHour;
  let startEvent = getRandomDate();
  let endEvent = startEvent + gap;

  while(!validateDateEvent(startEvent, endEvent, storageDayEventListMap)) {
    startEvent = getRandomDate();
    endEvent = startEvent + gap;
  }
  yield new Date(startEvent);
  yield new Date(endEvent );
}

function getRandomDate() {
  let gap = Math.round(Math.random() * (7 * msInDay));
  let startDate = getWeekStartDate().getTime();
  return startDate + gap;
}

function getWeekDay() {
  let day = new Date().getDay();
  if(day === 0) return 7;
  else return day - 1;
}

// Returns current week start date
function getWeekStartDate() {
  let date = new Date();
  date.setTime(date.getTime() - getWeekDay() * msInDay);
  date.setHours(0, 0, 0, 0);
  return date;
}

function getWeekEndDate(){
  let date = new Date();
  date.setTime(date.getTime() + (6 - getWeekDay()) * msInDay);
  date.setHours(23, 59, 59, 999);
  return date;
}

function getTitleDay(number) {
  switch (number) {
    case 0: return 'Saturday';
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thursday';
    case 5: return 'Friday';
    case 6: return 'Sanday';
    default: return 'undefined Day';
  }
}

function validateDateEvent(startEvent, endEvent, storageDayEventListMap) {
  let bottomClock = new Date(startEvent).setHours(8, 0, 0, 0); //2 utc +0
  let upperClock = new Date(startEvent).setHours(19, 0, 0, 0); //13
  if(startEvent >= bottomClock && endEvent <= upperClock){
    if(!isIntersectionDate(startEvent, endEvent, storageDayEventListMap))
      return true;
    else return false;
  }
  return false;
}

function isIntersectionDate(startEvent, endEvent, storageDayEventListMap){
  let endDateEvent = new Date(endEvent);
  let startDateEvent = new Date(startEvent);
  let events = storageDayEventListMap.get(endDateEvent.getDay());

  for(let event of events) {
    if((endDateEvent > event.dateStart && endDateEvent < event.dateEnd)
      || (startDateEvent > event.dateStart && startDateEvent < event.dateEnd)
      || (event.dateStart > startDateEvent && event.dateEnd < endDateEvent))
      {
        return true
      }
  }
  return false;
}

function isSpaceTimeInDay(storageDayFreeTimeMap, day) {
  const spaceEvents = storageDayFreeTimeMap.get(day);
    for(let spaceEvent of spaceEvents) {
      if(spaceEvent.spaceEnd - spaceEvent.spaceStart >= msInHour)
        return true;
    }
  return false;
}

function searchNearTimeSpaceStart(timePoint, array){
  return array.reduce((nearPoint, curV) => {
    if(timePoint >= curV.spaceStart){
      if((timePoint - curV.spaceStart) < (timePoint - nearPoint.spaceStart))
        return curV;
      else return nearPoint;
    }
    return nearPoint;
  });
}

module.exports.getDateEvent = getDateEvent;
module.exports.getTitleDay = getTitleDay;
module.exports.getWeekStartDate = getWeekStartDate;
module.exports.getWeekEndDate = getWeekEndDate;
module.exports.validateDateEvent = validateDateEvent;
module.exports.isSpaceTimeInDay = isSpaceTimeInDay;
module.exports.searchNearTimeSpaceStart = searchNearTimeSpaceStart;
