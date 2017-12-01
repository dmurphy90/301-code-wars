'use strict';

function validateUsr(username) {
  return /^[a-z0-9\_]{4,16}$/g.test(username);
}
