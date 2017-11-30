'use strict';

function insertDash(num) {
   let tempNums = [];
   let numStr = num.toString();
   let digit;
   for (let i = 0; i < numStr.length; i++) {
     digit = numStr.charAt(i)
     if(parseInt(digit) % 2 && parseInt(numStr.charAt(i + 1)) % 2){
       digit += '-';
     }
      tempNums.push(digit);
    }
  return tempNums.join('');
};
