//always use function expression its easy to write and understand

//function declaration

const age3 = calcAge1(2003);//function can be called before
console.log(age3);

function calcAge1(birthYear)
{
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression
// const age4 = calcAge2(2020);//in function expression function cannot be called before
// console.log(age4);

const calcAge2 = function (birthYear)
{
    return 2037 - birthYear;
}

const age2 = calcAge2(1980);
console.log(age2);