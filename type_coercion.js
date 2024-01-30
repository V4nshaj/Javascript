//type coercion javascript automatically converts the data type
//type conversion manual consversion
const inputYear = '1991';
//type conversion
console.log(Number(inputYear)+18);
console.log(inputYear + 18);
console.log(Number('Jonas'));//output NaN i.e. not a no.
console.log(NaN);//output number
console.log(String(23));
//type coercion
console.log('I am ' + 23 + ' year old');
console.log('23'-'10' - 3);//10
console.log('23'+'10' + 3);//23103
console.log('23' * '2');//46 
console.log('23' / '2');//11.5 

let n = '1'+1;//'11'
n=n-1;//10 
console.log(n);