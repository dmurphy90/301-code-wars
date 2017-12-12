'use strict';

function cubeOdd(arr) {
  let total=0;
  for (let i in arr) {
    let cubeNum = (arr[i] * arr[i] * arr[i]);
    if(isNaN(cubeNum)) return undefined;
    if(arr[i] %2 !== 0) total += cubeNum;
  }
return total;
}
