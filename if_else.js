const age =15;
const isOldEnough = age>=18;
if(isOldEnough)
{
    console.log("Sarah can drive");
}
else if(age>50)
{
    console.log("not suitable to drive");
}
else{
    const yearLeft=18-age;
    console.log(`Under aged wait ${yearLeft} years`);
}
