'use strict';

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const positions = ['first', 'second', 'third', 'fourth', 'fifth'];

let question = function(q) {
  return new Promise( (res, rej) => {
    rl.question(q, answer => {
      res(answer);
    })
  });
};

async function spotMaxValue() {
  let maxValue;
  let answer;

  while (positions.length > 0) {
    answer = await question(`write value ${positions.shift()} = `);

    if(!isNaN(answer)) {
      // than initial maxValue first value
      maxValue = (positions[0] == 'second') ? answer : Math.max(answer, maxValue);
    }
    else throw new Error('value is NaN').message;
  }

    console.log(`maxValue = ${maxValue}`);
    rl.close();
};

spotMaxValue().catch(error => {
  console.log(error);
  rl.close();
});
