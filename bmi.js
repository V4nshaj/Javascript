const massMark = 78;
const heightMark = 1.68;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);    
console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIJohn>BMIMark;//alway use comparing like this
console.log(markHigherBMI);

if(BMIMark>BMIJohn)
{
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
    

}
else
{
    console.log("John's BMI is higher than Mark's!");
    console.log(`Mark's BMI (${BMIJohn.toFixed(1)}) is higher than John's (${BMIMark.toFixed(1)})!`);
}