const age = 18
//always use strict equality
if(age === 18) console.log('You are adult');
if('18' === 18) console.log('You are not adult');//does not print cant compare
// triple equal to === is a strict equality operator it only returns when both values are same
if('18'==18) console.log('text is 18');
// double equality == is a loose equality operator it does type conversion