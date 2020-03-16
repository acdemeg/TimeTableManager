'use strict'

const errorEnum = Object.freeze({
  Error_Name : 'You entered not allowed name',
  Error_Title : 'You entered not allowed title for event',
  Error_Date : 'You entered not allowed format of date for event',
  Error_Time : 'You entered not allowed format of time for event',
  Error_Create_Event : 'Time end the event must be larger than time start',
  Error_Email_Validate : 'You entered not allowed email',
  Time_Assign_Error: 'Must have values in range 8:00 - 19:00',
  Date_Assign_Error: 'Date must be assigned on current week',
  Day_Assign_Error: 'In that day absent enough quantity free time',
  Error_Event_Intersect: 'Events must not be intersect',
  Error_File: 'File had not been saved!'
});

const messageEnum = Object.freeze({
  Name : 'Enter your name:  ',
  Email : 'Enter your email: ',
  File_Saved : 'The Schedule has been saved',
  Title_Event_List: 'ID        Name          dateStart       dateEnd\n',
  List_Events : 'List of events for the current week\n',
  List_Time_Space : 'List of space at time for the current week\n',
  Title_Event: 'Enter title event: ',
  Date_Event: 'Enter date event in format YYYY-MM-DD: ',
  Day_Assign: 'Please enter another date ',
  Time_Event_Start: 'Enter time start event in format HH:MM: ',
  Time_Event_End: 'Enter time end event in format HH:MM: ',
  Create_Events_Continue: 'Continue create events? Enter yes/no: '
  });

const daysOfWeekEnum = Object.freeze({
  Saturday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Sanday: 6,
});

  module.exports.errorEnum = errorEnum;
  module.exports.messageEnum = messageEnum;
  module.exports.daysOfWeekEnum = daysOfWeekEnum;
