'use strict';

function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let finalPost = "";
  for (i = 0; i <= str.length; i++) {
    if (vowels.indexOf(str.charAt(i)) === -1) {
      finalPost = finalPost + str.charAt(i);
    }
  }
  return finalPost;
}
