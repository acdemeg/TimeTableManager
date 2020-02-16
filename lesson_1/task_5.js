'use strict';

function exclude (arr, ...forExclude) {
  return arr.filter( item => !forExclude.includes(item) );
}

console.log( exclude([1, 2, 3], 1) );         // 2,3
console.log( exclude([1, 2, 3], 1, 2) );      // 3
console.log( exclude([1, 2, 3], 1, 2, 3) );   // []
