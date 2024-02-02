//one line function
//arrow function cannot use this keyword

const calcAge = birthYear => 2037 - birthYear;
const age = calcAge(1991);
console.log(age);

const yearUntilRetirement = birthYear => {
    const age = 2037- birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log (yearUntilRetirement(1991));

const yearUntilRetirement1 = (birthYear, firstName) => {
    const age = 2037- birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log (yearUntilRetirement1(1992, 'Jonas'));