'use strict';

function high(x){
  var words = x.split(' '),
      val = 0,
      thatWord = '';
  for(let i = 0; i < words.length; i++){
    var thisWord = words[i],
        newVal = 0;
    for(let j = 0; j < thisWord.length; j++){
      newVal += (thisWord.charCodeAt(j) - 96);
    }
    if(newVal > val){
      val = newVal;
      thatWord = thisWord;
    }
  }
  return thatWord;
}
