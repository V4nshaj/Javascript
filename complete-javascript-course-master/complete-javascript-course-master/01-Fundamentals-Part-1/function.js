 function logger()
 {
    console.log('My name is Jonas');
 }
//calling or running or invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges)
{
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const juice = fruitProcessor(5 , 0);
console.log(juice);
console.log(fruitProcessor(7 , 4));
