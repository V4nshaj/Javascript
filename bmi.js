const massMark = 78;
const heightMark = 1.68;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);    
console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIJohn>BMIMark;//alway use comparing like this
console.log(markHigherBMI);