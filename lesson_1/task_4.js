'use strict';

function printMessage(message, date = new Date()) {
  if (message !== undefined) {
    console.log(`[${date}] ${message}`);
    } else console.log('Message can not is empty');
}

printMessage();
printMessage('hello');
printMessage('hello', '01.01.01')
