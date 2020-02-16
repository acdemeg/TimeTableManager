'use strict';

function print(arr, separator = '-') {
  let string = '';
  if(arr === undefined) return console.log('arr is Empty');
  for(let i = 0; i < arr.length; i++)
    string += String(arr[i]) + separator;
  console.log( string.slice(0, -1) );
}


print([1, 2, 3], ',');
print([1, 2, 3]);
print();
