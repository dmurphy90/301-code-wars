'use strict';

function capitalize(s){
  let arr = s.split('');
  let arrOdd = [];
  arrOdd.push(arr[0]);
  arr[0] = arr[0].toUpperCase();
  for (let i = 1; i <arr.length; i++) {
    if (i%2 === 0) {
      arrOdd.push(arr[i]);
      arr[i] = arr[i].toUpperCase();
    } else
      arrOdd[i] = arr[i].toUpperCase();
  }
  var isEven = arr.join('');
  var isOdd = arrOdd.join('');
  return [isEven, isOdd];
};
