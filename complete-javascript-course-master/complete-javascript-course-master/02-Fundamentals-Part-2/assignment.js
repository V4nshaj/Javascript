function describeCountry(country, population, capitalCity)
{
    return`${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const describeIndia = describeCountry('India', 13, 'Delhi');
console.log(describeIndia);
