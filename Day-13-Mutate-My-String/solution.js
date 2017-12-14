'use strict';

function mutateMyStrings(stringOne, stringTwo){
  var arrOne = stringOne.split('');
  var arrTwo = stringTwo.split('');
  var final = '';
  for (let i in arrOne){
    if(!(arrOne[i] === arrTwo[i])) {
      final = final + arrOne.join('') + '\n';
      arrOne[i] = arrTwo[i];
    }
  }
  final = final + stringTwo + '\n'
  return final;
}
