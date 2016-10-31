'use strict';

// es6 feature: block-scoped "let" declaration
const sentences = [
  { subject: 'Magic', verb: 'is', object: 'amazing'},
  { subject: 'Star Trek 5', verb: 'was', object: 'bad'},
];

// es6 feature: object destructuring
function say({ subject, verb, object}) {
  // es6 feature: template strings
  // note that quotes below are backticks (`), not single quotes (')
  console.log(`${subject} ${verb} ${object}`);
}

//es6 feature: for..of
for(let s of sentences) {
  say(s);
}
