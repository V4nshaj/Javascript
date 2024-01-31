const hasDriverLicense = true;//A
const hasGoodVision = false;// B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;
if(shouldDrive)
{
    console.log('Sarah is able to drive');
}
else{
    console.log("Sarah cant drive");
}

const isTired = false;//C
console.log(hasDriverLicense || hasGoodVision || isTired)

const hasDriverLic = true;
const hasGoodvis = true;
if(hasDriverLic && hasGoodvis && !isTired)
{
    console.log('Sarah is able to drive');
}
else{
    console.log("Sarah cant drive");
}