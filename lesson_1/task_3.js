'use strict';

function print(arr, separator = '-'){
  if(arr === undefined) return console.log('arr is Empty');
  let string = arr[0];
  for(let i = 1; i < arr.length; i++)
    string += separator + String(arr[i]);
  return console.log(string);
}

print([1, 2, 3], ',');
print([1, 2, 3]);
print();
