console.log("This is the new javascript ");
let continent = 'Asia';
let population = 11;
const country = 'India';
const IsIsland= false;
console.log(country);
console.log(continent);
console.log(population);
let language;
language='Hindi';
console.log('Half Population', population/2)
population++;
console.log(population>6);
console.log(population<33);
const description=country+' is in '+continent+ ' and its '+population+' people speak '+ language;
console.log(description);
const des = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(des);
if (population > 33) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(`${country}'s population is ${33 - population} million below average`);
  }

//predict the result
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617' as it is in text that why quoted to understand
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

prompt('How many neighbour countries does your contry have?');