'use strict';//strict mode activated in javascript it helps to write secure javascript codes
//the codes which needs to be in strict should be written below
//but try to use at beginning of the script
//strict modes allows us to avoiod accidental errors or bugs in our code
//firstly it prevents error secondly it make visible errors

let hasDriverLiscese = false;
const passTest = true;
// if(passTest) hasDriversLiscese = true;//hasDriversLiscense is not spelled correctly
//strict modes tells us at line no. and the part which is wrong
// if(hasDriverLiscese) console.log('I can drive');

if(passTest) hasDriverLiscese =true;
if(hasDriverLiscese) console.log('I can drive');

// const interface = 'Audio'; //strict mode tells us that interface is a reserved word  
// const private = 534;
