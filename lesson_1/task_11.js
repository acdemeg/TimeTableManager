'use strict';

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const positions = ['first', 'second', 'third', 'fourth', 'fifth'];

let maxValue;

function spotMaxValue() {
  if(positions.length > 0) {
    return new Promise((resolve, reject) => {
      rl.question(`write value ${positions.shift()} = `,(answer) => {
        if(!isNaN(answer)) {
          // than initial maxValue first value
          if(positions[0] == 'second') {
            maxValue = answer;
          }
          else {
            maxValue = Math.max(answer, maxValue);
          }
          resolve(spotMaxValue());
        }
      reject(new Error('value is NaN').message);
      });
    })
  }
  else {
    console.log(`maxValue = ${maxValue}`);
    return rl.close();
  }
}

spotMaxValue().catch(error => {
  console.log(error);
  rl.close();
});
