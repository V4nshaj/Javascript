//windows+. to add emoji
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

const neighbour = prompt('How many neighbour countries does your contry have?');//prompts takes user input
if(neighbour == 1)
{
  console.log("Only one border");
}
else if(neighbour>1)
{
  console.log( 'More than 1 border');
}
else{
  console.log( 'No borders');
}

const neighbor = prompt('How many neighbour countries does your contry have?');//prompts takes user input
if(neighbor === 1)
{
  console.log("Only one border");
}
else if(neighbor>1)
{
  console.log( 'More than 1 border');
}
else{
  console.log( 'No borders');
}

const border = Number(prompt('How many neighbour countries does your contry have?'));//prompts takes user input
if(border === 1)
{
  console.log("Only one border");
}
else if(border>1)
{
  console.log( 'More than 1 border');
}
else{
  console.log( 'No borders');
}


const lang = 'hindi';
switch (lang) {
    case 'hindi':
        console.log('1st place');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'english':
      console.log('3rd place');
      break;
    case 'arabic':
      console.log('5th most spoken language');
    default:
        console.log('Great language too :D');
        break;
}