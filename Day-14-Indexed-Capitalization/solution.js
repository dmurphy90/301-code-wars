'use strict';

function capitalize(s,arr){
  return s.split('').map((a,z) => arr.includes(z) ? a.toUpperCase(): a).join('');
};
